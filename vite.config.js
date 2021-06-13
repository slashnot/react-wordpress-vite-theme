import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import yaml from '@rollup/plugin-yaml';
import copy from 'rollup-plugin-copy';
import { baseUrl, themeName } from './wp-theme/wp.config.json';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      yaml(),
      reactRefresh(),

      // COPY
      copy({
        targets: [
          { src: 'wp-theme/**', dest: themeName },
          { src: ['wp-theme/.*', '!WebKitPoint.config.json'], dest: themeName },
          {
            src: 'dist/index.html', dest: themeName, rename: 'index.php',
            transform: (contents) => {
              return contents.toString().replaceAll('/assets/', '<?php echo parse_url(get_template_directory_uri(), PHP_URL_PATH) ?>/assets/')
            }
          },
          { src: 'dist/assets', dest: themeName },
          { src: 'dist/**/index.*.js', dest: `${themeName}/assets`, transform: (contents => contents.toString().replaceAll('"img",{src:"/assets', `"img",{src:"${baseUrl}/${themeName}/assets/`)) }
        ],
        hook: 'writeBundle'
      }),

      // TRANSFORM

    ]
  }
})

