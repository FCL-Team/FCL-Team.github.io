import React, {useEffect, useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Icon} from '@site/src/components/Icons';
import Dropdown from '@site/src/components/Download/Dropdown';
import {formatBytes, formatDate} from '@site/src/utils/format';
import releases from '@site/src/data/releases.json';
import {motion} from 'motion/react';
import Reveal from '@site/src/components/motion/Reveal';

const DEVICE_OPTIONS = [
  {
    id: 'all',
    arch: null,
    label: <Translate id="download.device.all" description="Download device option">全部文件</Translate>,
    desc: (
      <Translate id="download.device.all.desc" description="Download device option description">
        显示所有架构的安装包
      </Translate>
    ),
  },
  {
    id: 'arm64',
    arch: 'arm64-v8a',
    label: <Translate id="download.device.arm64" description="Download device option">ARM64 · 64 位手机与平板</Translate>,
    desc: (
      <Translate id="download.device.arm64.desc" description="Download device option description">
        大多数现代手机，推荐
      </Translate>
    ),
  },
  {
    id: 'universal',
    arch: 'all',
    label: <Translate id="download.device.universal" description="Download device option">通用版 · 所有架构</Translate>,
    desc: (
      <Translate id="download.device.universal.desc" description="Download device option description">
        不确定选哪个时使用
      </Translate>
    ),
  },
  {
    id: 'armv7',
    arch: 'armeabi-v7a',
    label: <Translate id="download.device.armv7" description="Download device option">ARMv7 · 较旧的 32 位设备</Translate>,
    desc: (
      <Translate id="download.device.armv7.desc" description="Download device option description">
        32 位老设备
      </Translate>
    ),
  },
  {
    id: 'x86_64',
    arch: 'x86_64',
    label: <Translate id="download.device.x86_64" description="Download device option">x86_64 · 模拟器与 PC</Translate>,
    desc: (
      <Translate id="download.device.x86_64.desc" description="Download device option description">
        Windows 模拟器 / 云手机
      </Translate>
    ),
  },
  {
    id: 'x86',
    arch: 'x86',
    label: <Translate id="download.device.x86" description="Download device option">x86 · 较旧的模拟器</Translate>,
    desc: (
      <Translate id="download.device.x86.desc" description="Download device option description">
        仅用于旧模拟器
      </Translate>
    ),
  },
];

const SOURCE_OPTIONS = [
  {
    id: 'github',
    label: <Translate id="download.source.github" description="Download source option">GitHub 官方</Translate>,
    desc: (
      <Translate id="download.source.github.desc" description="Download source option description">
        官方发布渠道 · 海外较快
      </Translate>
    ),
  },
  {
    id: 'netdisk',
    label: <Translate id="download.source.netdisk" description="Download source option">网盘镜像（夸克）</Translate>,
    desc: (
      <Translate id="download.source.netdisk.desc" description="Download source option description">
        国内较快 · 官方网盘
      </Translate>
    ),
  },
];

function detectDevice() {
  if (typeof navigator === 'undefined') {
    return 'all';
  }
  const ua = navigator.userAgent.toLowerCase();
  if (!ua.includes('android')) {
    return 'all';
  }
  if (ua.includes('arm64') || ua.includes('aarch64')) {
    return 'arm64';
  }
  if (ua.includes('armv7') || ua.includes('armeabi')) {
    return 'armv7';
  }
  // Android phone browsers usually do not expose the CPU architecture.
  return 'arm64';
}

export default function DownloadPanel() {
  const {i18n} = useDocusaurusContext();
  const {latest} = releases;
  const [deviceId, setDeviceId] = useState('all');
  const [userChangedDevice, setUserChangedDevice] = useState(false);
  const [autoDetected, setAutoDetected] = useState(false);
  const [sourceId, setSourceId] = useState('github');

  useEffect(() => {
    const detected = detectDevice();
    const available = DEVICE_OPTIONS.some(
      (option) =>
        option.id === detected &&
        (option.arch === null || latest.assets.some((asset) => asset.arch === option.arch)),
    );
    if (available && detected !== 'all') {
      setDeviceId(detected);
      setAutoDetected(true);
    }
  }, [latest.assets]);

  const currentDevice = DEVICE_OPTIONS.find((option) => option.id === deviceId);
  const filteredAssets = currentDevice?.arch
    ? latest.assets.filter((asset) => asset.arch === currentDevice.arch)
    : latest.assets;
  const totalDownloads = latest.assets.reduce((sum, asset) => sum + (asset.downloads || 0), 0);
  const isNetdisk = sourceId === 'netdisk' && Boolean(latest.netdiskUrl);

  const deviceOptions = useMemo(
    () =>
      DEVICE_OPTIONS.filter(
        (option) =>
          option.arch === null || latest.assets.some((asset) => asset.arch === option.arch),
      ),
    [latest.assets],
  );

  return (
    <Reveal className="fcl-panel fcl-download-main" inView={false} delay={0.05}>
      <div className="fcl-release-head">
        <div>
          <div className="fcl-release-head__version">v{latest.versionName}</div>
          <div className="fcl-release-head__meta">
            <Translate id="download.published" description="Release date label">
              发布于
            </Translate>{' '}
            {formatDate(latest.publishedAt, i18n.currentLocale)}
            {' · '}
            {totalDownloads.toLocaleString()}{' '}
            <Translate id="download.assets.downloads" description="Download count suffix">
              次下载
            </Translate>
          </div>
        </div>
      </div>

      <div className="fcl-download-controls">
        <div>
          <Dropdown
            label={
              <Translate id="download.device.label" description="Device selector label">
                设备 / 架构
              </Translate>
            }
            value={deviceId}
            options={deviceOptions}
            icon="cpu"
            onChange={(next) => {
              setDeviceId(next);
              setUserChangedDevice(true);
            }}
          />
          {autoDetected && !userChangedDevice ? (
            <p className="fcl-select__hint">
              <Translate id="download.device.auto" description="Auto detected device hint">
                已根据你的设备自动选择
              </Translate>
            </p>
          ) : null}
        </div>
        <Dropdown
          label={
            <Translate id="download.source.label" description="Download source selector label">
              下载源
            </Translate>
          }
          value={sourceId}
          options={SOURCE_OPTIONS}
          icon="globe"
          onChange={setSourceId}
        />
      </div>

      {latest.netdiskUrl ? (
        <Reveal className="fcl-cloud" delay={0.1}>
          <div className="fcl-cloud__icon">
            <Icon name="cloud" size={20} />
          </div>
          <div className="fcl-cloud__text">
            <strong>
              <Translate id="download.cloud.title" description="Cloud drive banner title">
                网盘下载
              </Translate>
            </strong>
            <span>
              <Translate id="download.cloud.desc" description="Cloud drive banner description">
                国内用户推荐，下载更稳定
              </Translate>
            </span>
          </div>
          <a
            className="fcl-btn fcl-btn--primary fcl-btn--sm"
            href={latest.netdiskUrl}
            target="_blank"
            rel="noreferrer">
            <Icon name="external" size={15} />
            <Translate id="download.cloud.button" description="Cloud drive button">
              夸克网盘
            </Translate>
          </a>
        </Reveal>
      ) : null}

      {isNetdisk ? (
        <p className="fcl-select__hint fcl-select__hint--block">
          <Icon name="info" size={14} />
          <Translate
            id="download.source.netdiskHint"
            description="Hint when the netdisk source is selected">
            当前为网盘下载，请按文件名选择对应架构的安装包。
          </Translate>
        </p>
      ) : null}

      <h4 className="fcl-assets-title">
        <Icon name="download" size={15} />
        <Translate id="download.assets.title" description="Asset list title">
          下载文件列表
        </Translate>
      </h4>

      <div className="fcl-assets">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset, index) => (
            <motion.div
              className="fcl-asset"
              key={asset.arch}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="fcl-asset__icon">
                <Icon name="monitor" size={18} />
              </div>
              <div className="fcl-asset__main">
                <div className="fcl-asset__name">{asset.name}</div>
                <div className="fcl-asset__meta">
                  <span>{formatBytes(asset.size)}</span>
                  <span>
                    {(asset.downloads || 0).toLocaleString()}{' '}
                    <Translate id="download.assets.downloads" description="Download count suffix">
                      次下载
                    </Translate>
                  </span>
                </div>
              </div>
              <a
                className="fcl-btn fcl-btn--primary fcl-btn--sm"
                href={isNetdisk ? latest.netdiskUrl : asset.url}
                target="_blank"
                rel="noreferrer">
                <Icon name="download" size={15} />
                {isNetdisk ? (
                  <Translate id="download.assets.netdisk" description="Netdisk download button">
                    网盘下载
                  </Translate>
                ) : (
                  <Translate id="download.assets.download" description="Download button">
                    立即下载
                  </Translate>
                )}
              </a>
            </motion.div>
          ))
        ) : (
          <p className="fcl-assets-empty">
            <Translate id="download.assets.empty" description="Empty asset list hint">
              没有找到该设备对应的安装包，请切换设备类型。
            </Translate>
          </p>
        )}
      </div>
    </Reveal>
  );
}
