import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {formatDate} from '@site/src/utils/format';
import {Icon} from '@site/src/components/Icons';
import releases from '@site/src/data/releases.json';

export default function ReleaseHistory() {
  const {i18n} = useDocusaurusContext();

  return (
    <div className="fcl-releases">
      {releases.recent.map((release) => (
        <a
          key={release.tag}
          className="fcl-release-row"
          href={release.url}
          target="_blank"
          rel="noreferrer">
          <span>v{release.tag}</span>
          <span>
            {formatDate(release.publishedAt, i18n.currentLocale)}
            {' · '}
            <Translate id="download.history.github" description="Release history link suffix">GitHub Release</Translate>{' '}
            <Icon name="external" size={12} />
          </span>
        </a>
      ))}
    </div>
  );
}
