import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Icon} from '@site/src/components/Icons';
import Changelog from '@site/src/components/Download/Changelog';
import {formatDate} from '@site/src/utils/format';
import releases from '@site/src/data/releases.json';

export default function ReleaseNotes({changelog}) {
  const {i18n} = useDocusaurusContext();
  const {latest} = releases;

  return (
    <aside className="fcl-panel fcl-notes">
      <h2 className="fcl-panel__title">
        <Icon name="info" size={18} />
        <Translate id="download.notes.title" description="Release notes panel title">
          版本发布说明
        </Translate>
      </h2>
      <div className="fcl-notes__meta">
        <span className="fcl-notes__version">v{latest.versionName}</span>
        <span className="fcl-muted">{formatDate(latest.publishedAt, i18n.currentLocale)}</span>
      </div>
      <div className="fcl-notes__scroll" tabIndex={0} role="region">
        <Changelog text={changelog} />
      </div>
      <a className="fcl-notes__link" href={latest.releaseUrl} target="_blank" rel="noreferrer">
        <Translate id="download.notes.viewAll" description="Link to full release notes">
          在 GitHub 查看完整更新日志
        </Translate>
        <Icon name="external" size={14} />
      </a>
    </aside>
  );
}
