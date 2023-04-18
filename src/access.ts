/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(
  initialState: { currentUser?: API.CurrentUser; hasRoutes?: any } | undefined,
) {
  const { currentUser, hasRoutes = [] } = initialState ?? {};
  return {
    canReadFoo: true,
    canUpdateFoo: () => false,
    canAdmin: currentUser && currentUser.access === 'admin',
    normalRouteFilter: (route: any) => hasRoutes.includes(route.name), // initialState 中包含了的路由才有权限访问
  };
}
