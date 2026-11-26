import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Icon} from '@site/src/components/Icons';
import {formatBytes, formatDate} from '@site/src/utils/format';
import releases from '@site/src/data/releases.json';

function ArchLabel({arch}) {
  switch (arch) {
    case 'arm64-v8a':
      return (
        <Translate id="download.arch.arm64" description="APK architecture label">ARM64 · 64 位手机与平板</Translate>
      );
    case 'all':
      return (
        <Translate id="download.arch.all" description="APK architecture label">通用 · 所有架构</Translate>
      );
    case 'armeabi-v7a':
      return (
        <Translate id="download.arch.armv7" description="APK architecture label">ARMv7 · 较旧的 32 位设备</Translate>
      );
    case 'x86_64':
      return (
        <Translate id="download.arch.x86_64" description="APK architecture label">x86_64 · 模拟器与 PC</Translate>
      );
    case 'x86':
      return (
        <Translate id="download.arch.x86" description="APK architecture label">x86 · 较旧的模拟器</Translate>
      );
    default:
      return arch;
  }
}

export default function DownloadPanel() {
  const {i18n} = useDocusaurusContext();
  const {latest} = releases;
  const [selectedArch, setSelectedArch] = useState(
    latest.assets[0] ? latest.assets[0].arch : 'all',
  );
  const selected =
    latest.assets.find((asset) => asset.arch === selectedArch) || latest.assets[0];

  return (
    <div className="fcl-panel">
      <div className="fcl-release-meta">
        <span className="fcl-version-chip">
          <Icon name="tag" size={14} />
          v{latest.versionName}
        </span>
        <span className="fcl-muted">
          <Translate id="download.published" description="Release date label">发布于</Translate>{' '}
          {formatDate(latest.publishedAt, i18n.currentLocale)}
        </span>
      </div>

      <h2 className="fcl-panel__title">
        <Icon name="download" size={18} />
        <Translate id="download.choose" description="Panel title to choose an APK">选择下载</Translate>
      </h2>

      <div
        className="fcl-arch-grid"
        role="radiogroup"
        aria-label="APK architecture">
        {latest.assets.map((asset) => {
          const active = asset.arch === selectedArch;
          return (
            <button
              key={asset.arch}
              type="button"
              role="radio"
              aria-checked={active}
              className={'fcl-arch' + (active ? ' fcl-arch--active' : '')}
              onClick={() => setSelectedArch(asset.arch)}>
              <span className="fcl-arch__name">
                <ArchLabel arch={asset.arch} />
                {asset.arch === 'arm64-v8a' ? (
                  <span className="fcl-arch__badge">
                    <Translate
                      id="download.arch.recommended"
                      description="Recommended APK badge">推荐</Translate>
                  </span>
                ) : null}
              </span>
              <span className="fcl-arch__meta">{formatBytes(asset.size)}</span>
            </button>
          );
        })}
      </div>

      <div className="fcl-download__actions">
        {selected ? (
          <a
            className="fcl-btn fcl-btn--primary"
            href={selected.url}
            target="_blank"
            rel="noreferrer">
            <Icon name="download" size={18} />
            <Translate id="download.downloadApk" description="Download APK button">下载 APK</Translate>
          </a>
        ) : null}
        {latest.netdiskUrl ? (
          <a
            className="fcl-btn fcl-btn--ghost"
            href={latest.netdiskUrl}
            target="_blank"
            rel="noreferrer">
            <Icon name="external" size={16} />
            <Translate id="download.mirror" description="Mirror download button">网盘下载</Translate>
          </a>
        ) : null}
      </div>

      <div className="fcl-hint">
        <Icon name="info" size={16} />
        <span>
          <Translate id="download.hint.arch" description="Hint about choosing an APK">大多数手机都是 64 位 ARM 架构。如果不确定该选哪个，请下载通用包。</Translate>
        </span>
      </div>

      <div className="fcl-hint">
        <Icon name="globe" size={16} />
        <span>
          <Translate id="download.hint.mirror" description="Hint about download mirror">部分地区访问 GitHub 可能较慢——可通过国内网盘镜像下载。</Translate>
        </span>
      </div>
    </div>
  );
}
