import Vue from "vue";
import Router from "vue-router";
import Layout from '@/layout/index'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/login",
			name: "login",
			component: () => import('@/views/login/index'),
		},
		{
			path: "/",
			name: "home",
			component: Layout,
			redirect: '/dashboard',
			children: [{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/dashboard/index'),
				meta: {title: 'Dashboard'}
			},
				{
					path: 'article',
					name: 'article',
					component: () => import('@/views/article/index'),
					meta: {title: 'article'}
				},
				{
					path: 'article/create',
					name: 'article-create',
					component: () => import('@/views/article/form'),
					meta: {title: 'article-create'}
				},
				{
					path: 'admin/edit',
					name: 'admin-edit',
					component: () => import('@/views/admin/index'),
					meta: {title: 'admin-edit'}
				},
				{
					path: 'admin/repassword',
					name: 'admin-repassword',
					component: () => import('@/views/admin/repassword'),
					meta: {title: 'admin-repassword'}
				},
				{
					path: 'chatroom',
					name: 'chatroom',
					component: () => import('@/views/chatroom/chatroom'),
					meta: {title: '聊天室'}
				}
			]
		},
	]
});
