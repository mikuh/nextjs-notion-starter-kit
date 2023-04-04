import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '08ff6a25f59b4266bf03048116c061ef',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Mew Impetus',
  domain: 'mewimpetus.com',
  author: 'GEB',

  // open graph metadata (optional)
  description: '专注于深度学习、强化学习、隐私计算、区块链等前言技术的研究...',
  // social usernames (optional)
  twitter: 'DeepMikuru',
  github: 'mikuh',
  // wechat: 'https://mp.weixin.qq.com/s?__biz=MzI3NzYxNjE4Mw==&mid=2247483689&idx=1&sn=a73fcea711e126ef98ea30b8437cab22',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'AI绘画',
    //   pageId: '8c71cc36451a47868f9330b1233464cd' //Ai-Painting-8c71cc36451a47868f9330b1233464cd
    // },
    {
      title: 'ChatGPT',
      pageId: '4e7e259c7f744861a00c2d9a1c43e535' //Ai-Painting-8c71cc36451a47868f9330b1233464cd
    },
    {
      title: '联系作者',
      pageId: '2095f3adca0e4c868188ff64e8220520' // Contact-2095f3adca0e4c868188ff64e8220520
    },
  ]
})
