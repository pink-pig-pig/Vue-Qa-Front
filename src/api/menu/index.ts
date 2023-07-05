import request from '/@/utils/request';

/**
 *
 * （不建议写成 request.post(xxx)，因为这样 post 时，无法 params 与 data 同时传参）
 *
 * 后端控制菜单模拟json，路径在 https://gitee.com/QA/Vue-Qa-Front-images/tree/master/menu
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getAdminMenu 获取后端动态路由菜单(admin)
 * @method getTestMenu 获取后端动态路由菜单(test)
 */
export function useMenuApi() {
	return {
		getAdminMenu: (params?: object) => {
			return request({
				url: '/gitee/QA/Vue-Qa-Front-images/raw/master/menu/adminMenu.json',
				method: 'get',
				params,
			});
		},
		getTestMenu: (params?: object) => {
			return request({
				url: '/gitee/QA/Vue-Qa-Front-images/raw/master/menu/testMenu.json',
				method: 'get',
				params,
			});
		},
	};
}
