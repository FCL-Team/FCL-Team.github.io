import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Icon, BrandDiscord, BrandGithub, BrandQQ} from '@site/src/components/Icons';
import {LINKS} from '@site/src/constants';
import Reveal from '@site/src/components/motion/Reveal';

export default function CommunityCTA() {
  return (
    <section className="fcl-section">
      <div className="fcl-container">
        <Reveal className="fcl-cta">
          <div className="fcl-cta__inner">
            <div className="fcl-cta__text">
              <h2 className="fcl-cta__title">
                <Translate id="home.community.title" description="Community CTA title">加入社区</Translate>
              </h2>
              <p className="fcl-cta__desc">
                <Translate id="home.community.desc" description="Community CTA description">获取帮助、分享你的配置、反馈问题，或者帮助把 FCL 翻译成你的语言。</Translate>
              </p>
            </div>
            <div className="fcl-cta__actions">
              <a
                className="fcl-btn fcl-btn--primary"
                href={LINKS.discord}
                target="_blank"
                rel="noreferrer">
                <BrandDiscord size={18} />
                Discord
              </a>
              <a
                className="fcl-btn fcl-btn--ghost"
                href={LINKS.qq}
                target="_blank"
                rel="noreferrer">
                <BrandQQ size={18} />
                <Translate id="home.community.qq" description="QQ group button">QQ 群</Translate>
              </a>
              <a
                className="fcl-btn fcl-btn--ghost"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer">
                <BrandGithub size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className="fcl-cta__links">
            <Link to="/community">
              <Translate id="home.community.more" description="Link to the community page">全部社区链接</Translate>
              <Icon name="arrowRight" size={15} />
            </Link>
            <a href={LINKS.weblate} target="_blank" rel="noreferrer">
              <Translate id="home.community.translate" description="Link to Weblate">参与翻译 FCL</Translate>
              <Icon name="external" size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
