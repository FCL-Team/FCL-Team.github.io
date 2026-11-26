import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {motion} from 'motion/react';
import {Icon, BrandGithub} from '@site/src/components/Icons';
import Reveal from '@site/src/components/motion/Reveal';
import {formatCompact} from '@site/src/utils/format';
import releases from '@site/src/data/releases.json';
import {LINKS} from '@site/src/constants';

function Stat({value, label}) {
  return (
    <div className="fcl-stat">
      <div className="fcl-stat__value">{value}</div>
      <div className="fcl-stat__label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const {stats} = releases;

  return (
    <section className="fcl-hero">
      <div className="fcl-container fcl-hero__inner">
        <div className="fcl-hero__content">
          <Reveal as="h1" className="fcl-hero__title" inView={false} duration={0.6}>
            Fold Craft <span className="fcl-hero__gradient">Launcher</span>
          </Reveal>

          <Reveal as="p" className="fcl-hero__tagline" inView={false} delay={0.08}>
            <Translate id="home.hero.tagline" description="Hero tagline">在 Android 设备上畅玩 Minecraft: Java 版</Translate>
          </Reveal>

          <Reveal as="p" className="fcl-hero__desc" inView={false} delay={0.16}>
            <Translate id="home.hero.desc" description="Hero description">FCL 是一款免费、开源的启动器，可在 Android 上运行所有版本的 Minecraft: Java 版——支持你喜爱的模组、光影、自定义操作，还有如家一般的主题。</Translate>
          </Reveal>

          <Reveal className="fcl-hero__actions" inView={false} delay={0.24}>
            <Link className="fcl-btn fcl-btn--primary" to="/download">
              <Icon name="download" size={18} />
              <Translate id="home.hero.download" description="Hero primary button">下载 FCL</Translate>
            </Link>
            <a
              className="fcl-btn fcl-btn--ghost"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer">
              <BrandGithub size={18} />
              <Translate id="home.hero.github" description="Hero secondary button">在 GitHub 查看</Translate>
            </a>
          </Reveal>

          <Reveal as="p" className="fcl-hero__note" inView={false} delay={0.3}>
            <Translate id="home.hero.note" description="Small note under hero buttons">免费开源 · GPL-3.0 · 由 FCL-Team 与贡献者共同打造</Translate>
          </Reveal>

          <Reveal className="fcl-stats" inView={false} delay={0.36}>
            <Stat
              value={formatCompact(stats.totalDownloads)}
              label={
                <Translate id="home.stats.downloads" description="Downloads stat label">下载量</Translate>
              }
            />
            <Stat
              value={formatCompact(stats.stars)}
              label={
                <Translate id="home.stats.stars" description="GitHub stars stat label">GitHub Star</Translate>
              }
            />
            <Stat
              value={formatCompact(stats.contributors)}
              label={
                <Translate id="home.stats.contributors" description="Contributors stat label">贡献者</Translate>
              }
            />
          </Reveal>
        </div>

        <Reveal className="fcl-hero__visual" inView={false} delay={0.18}>
          <img
            className="fcl-hero__icon"
            src="/img/logo.png"
            alt=""
            width={92}
            height={92}
            aria-hidden="true"
          />
          <motion.div
            className="fcl-hero__float"
            animate={{y: [0, -8, 0]}}
            transition={{duration: 7, repeat: Infinity, ease: 'easeInOut'}}>
            <div className="fcl-hero__shot">
              <img
                className="fcl-hero__shot-img fcl-hero__shot-img--dark"
                src="/img/screenshots/ui_main_dark.jpg"
                alt="Fold Craft Launcher home screen in dark theme"
                width={1280}
                height={720}
              />
              <img
                className="fcl-hero__shot-img fcl-hero__shot-img--light"
                src="/img/screenshots/ui_main_light.jpg"
                alt="Fold Craft Launcher home screen in light theme"
                width={1280}
                height={720}
                loading="lazy"
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
