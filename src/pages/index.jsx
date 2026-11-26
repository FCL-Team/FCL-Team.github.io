import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import Hero from '@site/src/components/Home/Hero';
import FeatureGrid from '@site/src/components/Home/FeatureGrid';
import CommunityCTA from '@site/src/components/Home/CommunityCTA';

export default function Home() {
  return (
    <Layout
      wrapperClassName="fcl-home"
      title={translate({
        id: 'home.meta.title',
        message: 'Android 上的 Minecraft: Java 版',
        description: 'Homepage meta title',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'Fold Craft Launcher 是一款免费、开源的 Android 版 Minecraft: Java 版启动器。畅玩所有版本，支持模组、光影与完全自定义的触控操作。',
        description: 'Homepage meta description',
      })}>
      <Hero />
      <FeatureGrid />
      <CommunityCTA />
    </Layout>
  );
}
