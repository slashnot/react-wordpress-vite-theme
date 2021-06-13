import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import yaml from '@rollup/plugin-yaml';
import copy from 'rollup-plugin-copy';
import config from './wp-theme/wp.config.json';

const {
  baseUrl='',
  themeName = 'React-Vite-Wordpress',
  themeFolder = 'theme-dist'
} = config;

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      yaml(),
      reactRefresh(),

      // COPY
      copy({
        targets: [
          { src: ['wp-theme/**', '!**/wp.config.json'], dest: `${themeFolder}/${themeName}` },
          { src: 'wp-theme/.*', dest: `${themeFolder}/${themeName}` },
          {
            src: 'dist/index.html', dest: `${themeFolder}/${themeName}`, rename: 'index.php',
            transform: (contents) => {
              return contents.toString().replaceAll('/assets/', '<?php echo parse_url(get_template_directory_uri(), PHP_URL_PATH) ?>/assets/')
            }
          },
          { src: 'dist/assets', dest: `${themeFolder}/${themeName}` },
          { src: 'dist/**/index.*.js', dest: `${themeFolder}/${themeName}/assets`, transform: (contents => contents.toString().replaceAll('"img",{src:"/assets', `"img",{src:"${baseUrl}/${themeName}/assets/`)) }
        ],
        hook: 'writeBundle'
      }),
    ]
  }
})

