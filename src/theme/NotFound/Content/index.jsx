import React from 'react';
import Link from '@docusaurus/Link';
import {Icon} from '@site/src/components/Icons';

/**
 * 404 content shared by:
 * - @theme/NotFound (standalone catch-all route, wrapped in <Layout> there)
 * - @theme/DocRoot (unknown docs URL, already wrapped in <Layout> by DocsRoot)
 *
 * The site is maintained by a Chinese team, so the 404 page is Chinese-only.
 */
export default function NotFoundContent() {
  return (
    <main className="container">
      <div className="fcl-404">
        <div className="fcl-404__code">404</div>
        <h1 className="fcl-404__title">这个页面走丢了</h1>
        <p className="fcl-404__desc">
          你要找的页面不存在，或者已经被移走了。我们带你回到有用的地方吧。
        </p>
        <div className="fcl-center-actions" style={{marginTop: 0}}>
          <Link className="fcl-btn fcl-btn--primary" to="/">
            <Icon name="arrowRight" size={17} />
            返回首页
          </Link>
          <Link className="fcl-btn fcl-btn--ghost" to="/download">
            <Icon name="download" size={17} />
            下载 FCL
          </Link>
        </div>
      </div>
    </main>
  );
}
