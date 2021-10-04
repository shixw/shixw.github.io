// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'JAVA',
    link: '/java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: 'JAVA',
      //   items: [
      //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
      //   ],
      // },
      // {
      //   text: '学习笔记',
      //   items: [
      //     { text: '《JavaScript教程》', link: '/note/javascript/' },
      //   ],
      // },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: 'MySQL', link: '/mysql/' },
    ],
  },
  {
    text: '开源框架',
    link: '/framework/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '日志框架',link: '/pages/6bd25c/'
      },
      {
        text: '全链路跟踪', link: '/apm/'
      },
    ],
  },

  // { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      // { text: '技术框架', link: '/pages/eee83a9211a70f9d/' },
      // { text: '网站', link: '/pages/eee83a9211a70f9d/' },
      { text: '资源', link: '/pages/beb6c0bd8a66cea6/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: 'MAC使用技巧', link: '/macos/' },
    ],
  },
  // {
  //   text: '索引',
  //   link: '/archives/',
  //   items: [
  //     { text: '分类', link: '/categories/' },
  //     { text: '标签', link: '/tags/' },
  //     { text: '归档', link: '/archives/' },
  //   ],
  // },
]
