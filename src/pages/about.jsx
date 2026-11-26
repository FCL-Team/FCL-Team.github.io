import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import PageHero from '@site/src/components/PageHero';
import {Icon, BrandGithub} from '@site/src/components/Icons';
import {LINKS} from '@site/src/constants';
import {formatCompact} from '@site/src/utils/format';
import releases from '@site/src/data/releases.json';
import contributors from '@site/src/data/contributors.json';
import Reveal from '@site/src/components/motion/Reveal';

function Stat({value, label}) {
  return (
    <div className="fcl-about-stat">
      <div className="fcl-stat__value">{value}</div>
      <div className="fcl-stat__label">{label}</div>
    </div>
  );
}

function FoundationCard({icon, title, desc, href}) {
  return (
    <a className="fcl-card fcl-link-card" href={href} target="_blank" rel="noreferrer">
      <div className="fcl-card__icon">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="fcl-card__title">{title}</h3>
      <p className="fcl-card__desc">{desc}</p>
      <span className="fcl-link-card__action">
        <Translate id="about.foundation.visit" description="Foundation card action">访问项目</Translate>
        <Icon name="external" size={14} />
      </span>
    </a>
  );
}

export default function About() {
  const {stats} = releases;

  return (
    <Layout
      wrapperClassName="fcl-page"
      title={translate({
        id: 'about.meta.title',
        message: '关于',
        description: 'About page meta title',
      })}
      description={translate({
        id: 'about.meta.description',
        message:
          '了解 Fold Craft Launcher：一款由 FCL-Team 与社区共同打造的开源 Android 版 Minecraft: Java 版启动器。',
        description: 'About page meta description',
      })}>
      <PageHero
        title={
          <Translate id="about.title" description="About page title">关于 Fold Craft Launcher</Translate>
        }
        description={
          <Translate id="about.desc" description="About page description">一款免费、开源的启动器，把 Minecraft: Java 版带到 Android 设备上——由 FCL-Team 与来自世界各地的贡献者共同打造。</Translate>
        }
      />

      <section className="fcl-section" style={{paddingTop: '0.5rem'}}>
        <div className="fcl-container">
          <Reveal className="fcl-about-grid">
            <div className="fcl-panel">
              <img className="fcl-about-icon" src="/img/logo.png" alt="" width={84} height={84} />
              <p className="fcl-about-lead">
                <Translate id="about.lead1" description="About intro paragraph 1">Fold Craft Launcher（FCL）最初是为了在没有电脑的情况下，在 Android 设备上运行 Minecraft: Java 版而诞生的。它结合了 HMCL 的启动器内核与 Amethyst-Android 游戏后端，让手机和平板也能运行真正的 Java 版游戏——模组、光影一个不少。</Translate>
              </p>
              <p className="fcl-about-lead">
                <Translate id="about.lead2" description="About intro paragraph 2">FCL 是基于 GPL-3.0 许可证发布的自由软件。代码、文档和翻译全部开放：任何人都可以查看、改进并分享它。</Translate>
              </p>
              <p className="fcl-about-lead">
                <Translate id="about.lead3" description="About intro paragraph 3">本项目由 FCL-Team 与社区共同开发。翻译通过 Weblate 管理，文档托管在 FCL-Docs 仓库。</Translate>
              </p>
              <div className="fcl-center-actions" style={{justifyContent: 'flex-start', marginTop: '1.4rem'}}>
                <a
                  className="fcl-btn fcl-btn--ghost fcl-btn--sm"
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer">
                  <BrandGithub size={16} />
                  <Translate id="about.github" description="About GitHub button">查看源代码</Translate>
                </a>
                <a
                  className="fcl-btn fcl-btn--ghost fcl-btn--sm"
                  href={LINKS.afdian}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="heart" size={16} />
                  <Translate id="about.sponsor" description="About sponsor button">赞助项目</Translate>
                </a>
              </div>
            </div>

            <div className="fcl-panel">
              <h2 className="fcl-panel__title">
                <Icon name="users" size={18} />
                <Translate id="about.stats.title" description="About stats title">项目数据</Translate>
              </h2>
              <div className="fcl-about-stats">
                <Stat
                  value={formatCompact(stats.totalDownloads)}
                  label={
                    <Translate id="about.stats.downloads" description="Stats label">APK 下载量</Translate>
                  }
                />
                <Stat
                  value={formatCompact(stats.stars)}
                  label={
                    <Translate id="about.stats.stars" description="Stats label">GitHub Star</Translate>
                  }
                />
                <Stat
                  value={formatCompact(stats.contributors)}
                  label={
                    <Translate id="about.stats.contributors" description="Stats label">贡献者</Translate>
                  }
                />
                <Stat
                  value={formatCompact(stats.releases)}
                  label={
                    <Translate id="about.stats.releases" description="Stats label">公开版本</Translate>
                  }
                />
              </div>
              <p className="fcl-muted" style={{marginTop: '1.2rem'}}>
                <Translate id="about.stats.note" description="Stats footnote">数据统计自公开的 GitHub 仓库与 Release 资源。</Translate>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fcl-section fcl-section--alt">
        <div className="fcl-container">
          <div className="fcl-section-head">
            <h2 className="fcl-section-title">
              <Translate id="about.foundation.title" description="Foundations title">站在优秀的开源成果之上</Translate>
            </h2>
            <p className="fcl-section-sub">
              <Translate id="about.foundation.sub" description="Foundations subtitle">没有下面这些项目，就没有 FCL。衷心感谢它们的维护者与贡献者。</Translate>
            </p>
          </div>
          <Reveal className="fcl-grid fcl-grid--4">
            <FoundationCard
              icon="box"
              title="HMCL"
              desc={
                <Translate id="about.foundation.hmcl" description="Foundation description">启动器内核：版本管理、下载与启动逻辑均移植自 HMCL。</Translate>
              }
              href={LINKS.hmcl}
            />
            <FoundationCard
              icon="monitor"
              title="Amethyst-Android"
              desc={
                <Translate id="about.foundation.amethyst" description="Foundation description">Android 游戏后端，负责启动 JVM 并在移动设备上渲染 Minecraft。</Translate>
              }
              href={LINKS.amethyst}
            />
            <FoundationCard
              icon="cpu"
              title={
                <Translate id="about.foundation.openjdk.title" description="Foundation title">OpenJDK 运行时</Translate>
              }
              desc={
                <Translate id="about.foundation.openjdk" description="Foundation description">由 FCL-Team 构建并发布的多架构 Java 运行时，覆盖所有受支持的设备。</Translate>
              }
              href={LINKS.openjdk}
            />
            <FoundationCard
              icon="users"
              title="Terracotta + EasyTier"
              desc={
                <Translate id="about.foundation.terracotta" description="Foundation description">基于 Terracotta 模块封装的点对点联机网络，让设备之间可以局域网联机。</Translate>
              }
              href={LINKS.terracotta}
            />
          </Reveal>
        </div>
      </section>

      <section className="fcl-section">
        <div className="fcl-container">
          <div className="fcl-section-head">
            <h2 className="fcl-section-title">
              <Translate id="about.team.title" description="Team title">由社区共同构建</Translate>
            </h2>
            <p className="fcl-section-sub">
              <Translate id="about.team.sub" description="Team subtitle">代码、文档、翻译、控制布局和问题反馈——FCL 凝聚了许多人的心血。</Translate>
            </p>
          </div>

          <div className="fcl-contributors" style={{justifyContent: 'center'}}>
            {contributors.map((person) => (
              <a
                key={person.login}
                className="fcl-contributor"
                href={person.url}
                target="_blank"
                rel="noreferrer"
                title={person.login}>
                <img
                  src={person.avatar}
                  alt={person.login}
                  width={44}
                  height={44}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="fcl-center-actions">
            <a
              className="fcl-btn fcl-btn--ghost"
              href={LINKS.contributors}
              target="_blank"
              rel="noreferrer">
              <BrandGithub size={17} />
              <Translate id="about.team.action" description="Contributors link">在 GitHub 查看全部贡献者</Translate>
            </a>
            <a
              className="fcl-btn fcl-btn--ghost"
              href={LINKS.weblate}
              target="_blank"
              rel="noreferrer">
              <Icon name="globe" size={17} />
              <Translate id="about.team.translate" description="Translate link">帮助翻译 FCL</Translate>
            </a>
          </div>
        </div>
      </section>

      <section className="fcl-section fcl-section--alt">
        <div className="fcl-container">
          <Reveal className="fcl-about-grid">
            <div>
              <div className="fcl-section-head fcl-section-head--left">
                <h2 className="fcl-section-title">
                  <Translate id="about.credits.title" description="Credits title">相关项目</Translate>
                </h2>
                <p className="fcl-section-sub">
                  <Translate id="about.credits.sub" description="Credits subtitle">FCL 建立在这些项目之上，也与它们协同工作。完整的依赖列表见仓库 README。</Translate>
                </p>
              </div>
            </div>
            <div className="fcl-panel">
              <ul className="fcl-credit-list">
                <li><a href={LINKS.hmcl} target="_blank" rel="noreferrer">HMCL <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.amethyst} target="_blank" rel="noreferrer">Amethyst-Android <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.boat} target="_blank" rel="noreferrer">Boat <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.authlibInjector} target="_blank" rel="noreferrer">authlib-injector <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.easyTier} target="_blank" rel="noreferrer">EasyTier <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.terracotta} target="_blank" rel="noreferrer">Terracotta <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.touchController} target="_blank" rel="noreferrer">TouchController <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.ngGl4es} target="_blank" rel="noreferrer">NG-GL4ES <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.rendererPlugin} target="_blank" rel="noreferrer">FCLRendererPlugin <Icon name="external" size={13} /></a></li>
                <li><a href={LINKS.driverPlugin} target="_blank" rel="noreferrer">FCLDriverPlugin <Icon name="external" size={13} /></a></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fcl-section">
        <div className="fcl-container">
          <Reveal className="fcl-cta">
            <div className="fcl-cta__inner">
              <div>
                <h2 className="fcl-cta__title">
                  <Translate id="about.license.title" description="License CTA title">自由软件，始终如一</Translate>
                </h2>
                <p className="fcl-cta__desc">
                  <Translate id="about.license.desc" description="License CTA description">Fold Craft Launcher 基于 GNU 通用公共许可证 v3 发布。阅读许可证和最终用户协议，了解这对你意味着什么。</Translate>
                </p>
              </div>
              <div className="fcl-cta__actions">
                <a
                  className="fcl-btn fcl-btn--primary"
                  href={LINKS.gpl}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="shield" size={18} />
                  <Translate id="about.license.gpl" description="GPL button">GPL-3.0 许可证</Translate>
                </a>
                <a className="fcl-btn fcl-btn--ghost" href="/eula">
                  <Icon name="file" size={17} />
                  <Translate id="about.license.eula" description="EULA button">阅读最终用户协议</Translate>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
