import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PageHero from '@site/src/components/PageHero';
import DownloadPanel from '@site/src/components/Download/DownloadPanel';
import ReleaseNotes from '@site/src/components/Download/ReleaseNotes';
import ReleaseHistory from '@site/src/components/Download/ReleaseHistory';
import {Icon} from '@site/src/components/Icons';
import releases from '@site/src/data/releases.json';
import {LINKS} from '@site/src/constants';

export default function Download() {
  const {i18n} = useDocusaurusContext();
  const {latest} = releases;
  const changelog = i18n.currentLocale === 'zh-Hans' ? latest.changelog.zh : latest.changelog.en;

  return (
    <Layout
      wrapperClassName="fcl-page"
      title={translate({
        id: 'download.meta.title',
        message: '下载',
        description: 'Download page meta title',
      })}
      description={translate({
        id: 'download.meta.description',
        message:
          '下载适用于 Android 的最新 Fold Craft Launcher APK。选择适合你设备的安装包，查看更新日志，开始游戏。',
        description: 'Download page meta description',
      })}>
      <PageHero
        eyebrow={
          <Translate id="download.eyebrow" description="Download page eyebrow">下载</Translate>
        }
        title={
          <Translate id="download.title" description="Download page title">获取 Fold Craft Launcher</Translate>
        }
        description={
          <Translate id="download.desc" description="Download page description">最新稳定版，支持 Android 8.0 及以上系统。请选择与你的设备匹配的安装包——拿不准的话，就选通用包。</Translate>
        }>
        <div className="fcl-chips">
          <span className="fcl-chip">
            <Icon name="shield" size={14} />
            <Translate id="download.chip.gpl" description="Download page chip">GPL-3.0</Translate>
          </span>
          <span className="fcl-chip">
            <Icon name="monitor" size={14} />
            <Translate id="download.chip.android" description="Download page chip">Android 8.0+</Translate>
          </span>
          <span className="fcl-chip">
            <Icon name="tag" size={14} />
            v{latest.versionName}
          </span>
        </div>
      </PageHero>

      <section className="fcl-section" style={{paddingTop: 0}}>
        <div className="fcl-container">
          <div className="fcl-download">
            <DownloadPanel />
            <ReleaseNotes changelog={changelog} />
          </div>
        </div>
      </section>

      <section className="fcl-section">
        <div className="fcl-container">
          <div className="fcl-about-grid">
            <div>
              <div className="fcl-section-head fcl-section-head--left">
                <span className="fcl-eyebrow">
                  <Translate id="download.install.eyebrow" description="Install eyebrow">安装</Translate>
                </span>
                <h2 className="fcl-section-title">
                  <Translate id="download.install.title" description="Install title">几分钟内即可开玩</Translate>
                </h2>
              </div>
              <ol className="fcl-ol">
                <li>
                  <Translate id="download.install.step1" description="Install step 1">下载与你的设备匹配的 APK，然后打开文件。</Translate>
                </li>
                <li>
                  <Translate id="download.install.step2" description="Install step 2">如果 Android 弹出提示，请允许浏览器或文件管理器安装未知来源应用，然后确认安装。</Translate>
                </li>
                <li>
                  <Translate id="download.install.step3" description="Install step 3">打开 FCL 并添加账户——微软账户、离线账户或第三方认证服务器均可。</Translate>
                </li>
                <li>
                  <Translate id="download.install.step4" description="Install step 4">下载一个 Minecraft 版本，调整渲染器和控制布局，然后点击启动。</Translate>
                </li>
              </ol>
              <div className="fcl-center-actions" style={{justifyContent: 'flex-start'}}>
                <Link className="fcl-btn fcl-btn--ghost fcl-btn--sm" to="/docs/account">
                  <Icon name="user" size={16} />
                  <Translate id="download.install.account" description="Link to account docs">账户指南</Translate>
                </Link>
                <Link className="fcl-btn fcl-btn--ghost fcl-btn--sm" to="/docs/intro">
                  <Icon name="book" size={16} />
                  <Translate id="download.install.docs" description="Link to documentation">文档</Translate>
                </Link>
              </div>
            </div>

            <div className="fcl-panel">
              <h2 className="fcl-panel__title">
                <Icon name="clock" size={18} />
                <Translate id="download.history.title" description="Release history title">历史版本</Translate>
              </h2>
              <p className="fcl-prose" style={{marginBottom: '1.1rem'}}>
                <Translate id="download.history.desc" description="Release history description">想找旧版本？所有 Release 都保留在 GitHub 上。</Translate>
              </p>
              <ReleaseHistory />
              <div className="fcl-center-actions" style={{justifyContent: 'flex-start', marginTop: '1.3rem'}}>
                <a
                  className="fcl-btn fcl-btn--ghost fcl-btn--sm"
                  href={LINKS.releases}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="external" size={15} />
                  <Translate id="download.history.all" description="Link to all releases">全部版本</Translate>
                </a>
              </div>
            </div>
          </div>

          <p className="fcl-muted" style={{textAlign: 'center', marginTop: '3rem'}}>
            <Translate id="download.disclaimer" description="Trademark disclaimer">Fold Craft Launcher 与 Mojang Studios 或 Microsoft 没有隶属关系。Minecraft 是 Mojang Synergies AB 的商标。</Translate>
          </p>
        </div>
      </section>
    </Layout>
  );
}
