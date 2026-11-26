import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import PageHero from '@site/src/components/PageHero';
import {Icon, BrandDiscord, BrandGithub} from '@site/src/components/Icons';
import {LINKS} from '@site/src/constants';
import Reveal from '@site/src/components/motion/Reveal';

function LinkCard({icon, title, desc, href, action, external = true}) {
  const actionNode = (
    <span className="fcl-link-card__action">
      {action}
      <Icon name={external ? 'external' : 'arrowRight'} size={14} />
    </span>
  );

  const body = (
    <>
      <div className="fcl-card__icon">{icon}</div>
      <h3 className="fcl-card__title">{title}</h3>
      <p className="fcl-card__desc">{desc}</p>
      {actionNode}
    </>
  );

  if (external) {
    return (
      <a className="fcl-card fcl-link-card" href={href} target="_blank" rel="noreferrer">
        {body}
      </a>
    );
  }

  return (
    <Link className="fcl-card fcl-link-card" to={href}>
      {body}
    </Link>
  );
}

export default function Community() {
  return (
    <Layout
      wrapperClassName="fcl-page"
      title={translate({
        id: 'community.meta.title',
        message: '社区',
        description: 'Community page meta title',
      })}
      description={translate({
        id: 'community.meta.description',
        message:
          '加入 Fold Craft Launcher 社区：Discord 与 QQ 群、在 GitHub 反馈问题、参与翻译、支持项目开发。',
        description: 'Community page meta description',
      })}>
      <PageHero
        title={
          <Translate id="community.title" description="Community page title">加入 FCL 社区</Translate>
        }
        description={
          <Translate id="community.desc" description="Community page description">FCL 由志愿者共同打造，也因每一位玩家而不断成长。欢迎提问、分享你的配置、反馈问题，或者帮忙翻译启动器。</Translate>
        }
      />

      <section className="fcl-section" style={{paddingTop: '0.5rem'}}>
        <div className="fcl-container">
          <Reveal className="fcl-grid fcl-grid--3">
            <LinkCard
              icon={<BrandDiscord size={22} />}
              title={
                <Translate id="community.discord.title" description="Community card title">Discord</Translate>
              }
              desc={
                <Translate id="community.discord.desc" description="Community card description">主要的国际社区：技术支持、模组交流和版本资讯。</Translate>
              }
              action={
                <Translate id="community.discord.action" description="Community card action">加入 Discord</Translate>
              }
              href={LINKS.discord}
            />
            <LinkCard
              icon={<Icon name="chat" size={22} />}
              title={
                <Translate id="community.qq.title" description="Community card title">QQ 群</Translate>
              }
              desc={
                <Translate id="community.qq.desc" description="Community card description">中文用户社区。在 QQ 中搜索群号 762054349 即可加入。</Translate>
              }
              action={
                <Translate id="community.qq.action" description="Community card action">加入 QQ 群</Translate>
              }
              href={LINKS.qq}
            />
            <LinkCard
              icon={<BrandGithub size={22} />}
              title={
                <Translate id="community.github.title" description="Community card title">GitHub</Translate>
              }
              desc={
                <Translate id="community.github.desc" description="Community card description">反馈问题、提出功能建议、浏览源代码或提交 Pull Request。</Translate>
              }
              action={
                <Translate id="community.github.action" description="Community card action">打开 GitHub</Translate>
              }
              href={LINKS.github}
            />
            <LinkCard
              icon={<Icon name="globe" size={22} />}
              title={
                <Translate id="community.weblate.title" description="Community card title">翻译</Translate>
              }
              desc={
                <Translate id="community.weblate.desc" description="Community card description">在浏览器里把 FCL 翻译成你的语言——无需安装任何工具。</Translate>
              }
              action={
                <Translate id="community.weblate.action" description="Community card action">打开 Weblate</Translate>
              }
              href={LINKS.weblate}
            />
            <LinkCard
              icon={<Icon name="book" size={22} />}
              title={
                <Translate id="community.docs.title" description="Community card title">文档</Translate>
              }
              desc={
                <Translate id="community.docs.desc" description="Community card description">账户、键位布局、从源码构建与贡献指南。</Translate>
              }
              action={
                <Translate id="community.docs.action" description="Community card action">阅读文档</Translate>
              }
              href="/docs/intro"
              external={false}
            />
            <LinkCard
              icon={<Icon name="heart" size={22} />}
              title={
                <Translate id="community.sponsor.title" description="Community card title">赞助</Translate>
              }
              desc={
                <Translate id="community.sponsor.desc" description="Community card description">在爱发电上通过一次性或定期捐赠支持开发者。</Translate>
              }
              action={
                <Translate id="community.sponsor.action" description="Community card action">前往爱发电</Translate>
              }
              href={LINKS.afdian}
            />
          </Reveal>
        </div>
      </section>

      <section className="fcl-section fcl-section--alt">
        <div className="fcl-container">
          <Reveal className="fcl-about-grid">
            <div>
              <div className="fcl-section-head fcl-section-head--left">
                <h2 className="fcl-section-title">
                  <Translate id="community.help.title" description="Help section title">提问之前</Translate>
                </h2>
                <p className="fcl-section-sub">
                  <Translate id="community.help.sub" description="Help section subtitle">多提供一点信息，就能快很多。养成这四个习惯，你的问题会更快得到解答。</Translate>
                </p>
              </div>
              <ul className="fcl-tips">
                <li>
                  <Icon name="check" size={16} />
                  <Translate id="community.help.tip1" description="Help tip 1">发帖前先查阅文档，并搜索已有 issue。</Translate>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <Translate id="community.help.tip2" description="Help tip 2">附上 FCL 版本、设备型号和 Android 版本。</Translate>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <Translate id="community.help.tip3" description="Help tip 3">附上启动器日志——这是定位原因最快的方式。</Translate>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <Translate id="community.help.tip4" description="Help tip 4">保持耐心和友善，这里的每个人都是志愿者。</Translate>
                </li>
              </ul>
            </div>

            <div className="fcl-panel">
              <h2 className="fcl-panel__title">
                <Icon name="alert" size={18} />
                <Translate id="community.bugs.title" description="Bug reporting panel title">发现了 Bug？</Translate>
              </h2>
              <p className="fcl-prose">
                <Translate id="community.bugs.desc" description="Bug reporting panel text">对于可以稳定复现的问题，Issue 区是最合适的地方。请先搜索，再新建 issue 并附上日志。</Translate>
              </p>
              <div className="fcl-center-actions" style={{justifyContent: 'flex-start', marginTop: '1.2rem'}}>
                <a
                  className="fcl-btn fcl-btn--primary fcl-btn--sm"
                  href={LINKS.issues}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="file" size={16} />
                  <Translate id="community.bugs.action" description="Open issues button">提交 Issue</Translate>
                </a>
                <a
                  className="fcl-btn fcl-btn--ghost fcl-btn--sm"
                  href={LINKS.contributors}
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="users" size={16} />
                  <Translate id="community.bugs.contributors" description="Contributors button">认识贡献者</Translate>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
