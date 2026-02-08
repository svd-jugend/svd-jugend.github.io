import bricks from './bricks'
import { types } from 'react-bricks/frontend'

const config = {
  appId: import.meta.env.VITE_REACT_BRICKS_APP_ID,
  apiKey: import.meta.env.VITE_REACT_BRICKS_API_KEY,
  pageTypes: [
    {
      name: 'page',
      pluralName: 'pages',
      defaultLocked: false,
      sideEditProps: [],
      categories: [
        {
          id: 'content',
          title: 'Content',
          bricks: ['hero-unit', 'feature-item'],
        },
      ],
    },
  ],
  bricks,
  logo: '/assets/logo_schachverein.png',
  previewPath: '/cms/preview',
  contentClassName: 'react-bricks-content', // specific class wrapper if needed
}

export default config
