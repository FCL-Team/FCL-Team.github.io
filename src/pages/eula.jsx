import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import PageHero from '@site/src/components/PageHero';
import {LINKS} from '@site/src/constants';

export default function Eula() {
  return (
    <Layout
      wrapperClassName="fcl-page"
      title={translate({
        id: 'eula.meta.title',
        message: '最终用户许可协议',
        description: 'EULA page meta title',
      })}
      description={translate({
        id: 'eula.meta.description',
        message:
          'Fold Craft Launcher 最终用户许可协议。FCL 是一款基于 GPL-3.0 的开源 Android 版 Minecraft: Java 版启动器。',
        description: 'EULA page meta description',
      })}>
      <PageHero
        title={
          <Translate id="eula.title" description="EULA page title">最终用户许可协议</Translate>
        }
        description={
          <Translate id="eula.desc" description="EULA page description">安装或使用 Fold Craft Launcher 之前，请先阅读本协议。</Translate>
        }
      />

      <div className="fcl-legal">
        <div className="fcl-legal__card">
          <div className="fcl-legal__meta">
            <span>
              <Translate id="eula.applies" description="EULA scope">适用于 Android 版 Fold Craft Launcher</Translate>
            </span>
          </div>

          <p>
            <Translate id="eula.intro1" description="EULA intro paragraph 1">本协议由你与 Fold Craft Launcher 的开发者 FCL-Team 共同订立。安装或使用本软件即表示你同意以下条款。</Translate>
          </p>
          <p>
            <Translate id="eula.intro2" description="EULA intro paragraph 2">Fold Craft Launcher 是基于 GNU 通用公共许可证 v3 发布的自由软件。完整许可证文本可在 GNU 官网查阅。</Translate>
          </p>

          <h2>
            <Translate id="eula.s1.title" description="EULA section 1 title">一、用户义务</Translate>
          </h2>
          <ol>
            <li>
              <Translate id="eula.s1.i1" description="EULA section 1 item 1">使用符合要求的设备。Fold Craft Launcher 需要 Android 8.0 或更高版本。</Translate>
            </li>
            <li>
              <Translate id="eula.s1.i2" description="EULA section 1 item 2">自行承担网络接入及其他所使用服务的费用。</Translate>
            </li>
            <li>
              <Translate id="eula.s1.i3" description="EULA section 1 item 3">对你使用本软件所产生的一切后果负责。</Translate>
            </li>
          </ol>

          <h2>
            <Translate id="eula.s2.title" description="EULA section 2 title">二、免责声明</Translate>
          </h2>
          <ol>
            <li>
              <Translate id="eula.s2.i1" description="EULA section 2 item 1">因使用本软件而产生的风险由用户自行承担。</Translate>
            </li>
            <li>
              <Translate id="eula.s2.i2" description="EULA section 2 item 2">不保证本软件能满足所有用户的需求。</Translate>
            </li>
            <li>
              <Translate id="eula.s2.i3" description="EULA section 2 item 3">本软件不对第三方服务的正确性、安全性、合法性等负责。</Translate>
            </li>
            <li>
              <Translate id="eula.s2.i4" description="EULA section 2 item 4">开发者不对用户使用第三方服务造成的任何问题负责，也不承担也无法承担任何法律责任。</Translate>
            </li>
          </ol>

          <h2>
            <Translate id="eula.s3.title" description="EULA section 3 title">三、版权</Translate>
          </h2>
          <ol>
            <li>
              <Translate id="eula.s3.i1" description="EULA section 3 item 1">本软件的著作权、专利权及其他知识产权归开发者或指定版权所有者所有。</Translate>
            </li>
            <li>
              <Translate id="eula.s3.i2" description="EULA section 3 item 2">本软件所使用的第三方组件归各自版权所有者所有。</Translate>
            </li>
            <li>
              <Translate id="eula.s3.i3" description="EULA section 3 item 3">本软件完全开源，请遵守本软件的开源许可证。</Translate>
            </li>
          </ol>

          <p className="fcl-muted" style={{marginTop: '2rem'}}>
            <Translate id="eula.footer" description="EULA footer note">GNU 通用公共许可证 v3 的完整文本见</Translate>{' '}
            <a href={LINKS.gpl} target="_blank" rel="noreferrer">
              gnu.org/licenses/gpl-3.0.html
            </a>
            .{' '}
            <Translate id="eula.footer.source" description="EULA footer source note">Fold Craft Launcher 的源代码托管在 GitHub。</Translate>{' '}
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              FCL-Team/FoldCraftLauncher
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
