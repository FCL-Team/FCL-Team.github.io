import React from 'react';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

/**
 * Standalone 404 page (catch-all route). The docs plugin renders
 * @theme/NotFound/Content directly for unknown docs URLs, already inside a
 * layout, so the content itself is layout-free.
 */
export default function NotFound() {
  return (
    <Layout title="页面未找到">
      <NotFoundContent />
    </Layout>
  );
}
