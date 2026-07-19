const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'public/app.js',
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.css': 'css',
  },
  external: [],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
}).catch(() => process.exit(1));
