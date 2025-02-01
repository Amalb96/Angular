
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/home.module.ts": [
    {
      "path": "chunk-Q6OFD4EP.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 560, hash: '38f6d3263def948a0ac2618a06b592a9a25bcc242e959b8ed05642b2c76febeb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: '7b533c0e8ca92697f041fd0d87bba7f27f30f0e632f7ea81e010fd6c59aa5b85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
