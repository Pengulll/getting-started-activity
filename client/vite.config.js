import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../',
  server: {
    allowedHosts: '',
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      host: 'straight-atlantic-nicholas-initial.trycloudflare.com',
      protocol: 'wss',
      clientPort: 443,
    },
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes('node_modeules');
    },
  },
});
