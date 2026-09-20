// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Adds the /todo page (placeholder shot list) during `npm run dev` only.
// It never ships to the live site.
const devTodoPage = {
  name: 'dev-todo-page',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command === 'dev') {
        injectRoute({ pattern: '/todo', entrypoint: './src/dev/todo.astro' });
      }
    },
  },
};

export default defineConfig({
  site: 'https://christineye.com', // TODO: change to your real domain
  integrations: [mdx(), devTodoPage],
});
