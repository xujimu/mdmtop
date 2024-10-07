import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MDM监管锁系统",
  description: "apple ios 苹果mdm监管锁系统使用文档以及API说明",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/搭建教程.md' }
    ],
    sidebar: [
      {
        text: '部署与维护',
        collapsed: false,
        items: [
          { text: '系统介绍', link: '/系统介绍.md' },
          { text: '部署系统', link: '/搭建教程.md' }
        ],
      },
      {
        text: '系统使用',
        collapsed: false,
        items: [
          { text: '证书申请', link: '/使用教程.md' },
          { text: '业务逻辑架构', link: '/业务逻辑架构介绍.md' },
          { text: '管理员功能', link: '/管理员后台功能说明.md' },
          { text: '普通用户功能', link: '/普通用户后台功能说明.md' },
        ],
      },
      {
        text: '实战使用',
        collapsed: false,
        items: [
          { text: '设备上锁', link: '/上锁教程.md' },
          { text: '常见问题', link: '/常见问题.md' }
        ],
      }
    ],
    search: {
      provider: "local"
    }
  }
})
