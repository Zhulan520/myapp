export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      // layout为mix,点击一级菜单，并不会直接定位到第一个子级菜单页面，而是会呈现空白页面，因此需要重定向
      {
        redirect: '/admin/sub-page',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/kodoTest',
    name: 'kodoTest',
    icon: 'customerService',
    routes: [
      {
        path: '/kodoTest/test1',
        name: 'test1',
        icon: 'smile',
        component: './kodoTest',
      },
      // {
      //   component: './404',
      // },
      {
        redirect: '/kodoTest/test1',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
