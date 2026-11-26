import React from 'react';
import Translate from '@docusaurus/Translate';
import {Icon} from '@site/src/components/Icons';
import {LINKS} from '@site/src/constants';

function linkify(line, keyPrefix) {
  const parts = line.split(/(#\d+)/g);
  return parts.map((part, index) => {
    if (/^#\d+$/.test(part)) {
      const issue = part.slice(1);
      return (
        <a
          key={keyPrefix + '-issue-' + index}
          href={LINKS.issues + '/' + issue}
          target="_blank"
          rel="noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function Changelog({text}) {
  if (!text) {
    return (
      <p className="fcl-muted">
        <Translate id="download.changelog.empty" description="Empty changelog fallback">更新日志可在 GitHub 查看。</Translate>
      </p>
    );
  }

  const lines = text.split(/\r?\n/);

  return (
    <div className="fcl-changelog">
      {lines.map((line, index) => (
        <p key={'line-' + index}>{linkify(line, 'line-' + index)}</p>
      ))}
      <p className="fcl-changelog__footer">
        <a href={LINKS.releases} target="_blank" rel="noreferrer">
          <Translate id="download.changelog.more" description="Link to full release notes">在 GitHub 查看全部更新日志</Translate>{' '}
          <Icon name="external" size={14} />
        </a>
      </p>
    </div>
  );
}
