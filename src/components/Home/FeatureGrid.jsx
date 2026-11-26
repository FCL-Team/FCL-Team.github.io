import React from 'react';
import Translate from '@docusaurus/Translate';
import {Icon} from '@site/src/components/Icons';

function Feature({icon, title, desc}) {
  return (
    <article className="fcl-card fcl-feature">
      <div className="fcl-card__icon">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="fcl-card__title">{title}</h3>
      <p className="fcl-card__desc">{desc}</p>
    </article>
  );
}

export default function FeatureGrid() {
  return (
    <section className="fcl-section fcl-section--alt" id="features">
      <div className="fcl-container">
        <div className="fcl-section-head">
          <span className="fcl-eyebrow">
            <Translate id="home.features.eyebrow" description="Features section eyebrow">功能</Translate>
          </span>
          <h2 className="fcl-section-title">
            <Translate id="home.features.title" description="Features section title">游玩所需，一应俱全</Translate>
          </h2>
          <p className="fcl-section-sub">
            <Translate id="home.features.sub" description="Features section subtitle">为触屏打造的全功能启动器——也为喜欢折腾的你准备。</Translate>
          </p>
        </div>

        <div className="fcl-grid">
          <Feature
            icon="layers"
            title={
              <Translate id="home.features.versions.title" description="Feature title">所有 Minecraft 版本</Translate>
            }
            desc={
              <Translate id="home.features.versions.desc" description="Feature description">从 Alpha、Beta 快照到最新正式版——轻点一下即可切换版本。</Translate>
            }
          />
          <Feature
            icon="box"
            title={
              <Translate id="home.features.loaders.title" description="Feature title">支持所有模组加载器</Translate>
            }
            desc={
              <Translate id="home.features.loaders.desc" description="Feature description">开箱即用支持 Forge、NeoForge、Fabric、Quilt、LiteLoader、OptiFine 与 Cleanroom。</Translate>
            }
          />
          <Feature
            icon="cpu"
            title={
              <Translate id="home.features.java.title" description="Feature title">内置 Java 运行时</Translate>
            }
            desc={
              <Translate id="home.features.java.desc" description="Feature description">为每种架构内置 Java 8、17、21、25 运行时——也支持导入你自己的 Java。</Translate>
            }
          />
          <Feature
            icon="gamepad"
            title={
              <Translate id="home.features.controls.title" description="Feature title">合手的触控操作</Translate>
            }
            desc={
              <Translate id="home.features.controls.desc" description="Feature description">虚拟鼠标、完全可自定义的键位布局，并支持自动转换 ZalithLauncher 2 布局。</Translate>
            }
          />
          <Feature
            icon="sparkles"
            title={
              <Translate id="home.features.shaders.title" description="Feature title">光影与渲染器</Translate>
            }
            desc={
              <Translate id="home.features.shaders.desc" description="Feature description">使用 VirGL、Zink 或 MobileGlues 运行光影，充分发挥设备的性能。</Translate>
            }
          />
          <Feature
            icon="folder"
            title={
              <Translate id="home.features.resources.title" description="Feature title">一站式管理</Translate>
            }
            desc={
              <Translate id="home.features.resources.desc" description="Feature description">无需离开启动器，即可下载并管理模组、整合包、资源包、光影和存档。</Translate>
            }
          />
          <Feature
            icon="palette"
            title={
              <Translate id="home.features.themes.title" description="Feature title">打造你的专属风格</Translate>
            }
            desc={
              <Translate id="home.features.themes.desc" description="Feature description">自定义背景与配色，还可通过插件系统扩展渲染器和驱动。</Translate>
            }
          />
          <Feature
            icon="code"
            title={
              <Translate id="home.features.opensource.title" description="Feature title">免费且开源</Translate>
            }
            desc={
              <Translate id="home.features.opensource.desc" description="Feature description">基于 GPL-3.0 许可证，由 FCL-Team 与贡献者社区公开开发。</Translate>
            }
          />
        </div>
      </div>
    </section>
  );
}
