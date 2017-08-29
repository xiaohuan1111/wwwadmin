
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Customer from '@/components/Customer'
import Sourse from '@/components/advertise/Sourse'
import HomePage from '@/components/advertise/HomePage'
import Sets from '@/components/Sets'

let routes = [
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '', 
      leaf: true, // 只有一个节点
      iconCls: 'fa fa-home',
      children:[
      	{
      		path: 'dashboard',
      		component: Dashboard,
      		name: '首页'
      	}
      ]
    },
	{
      path: '/',
      component: Home,
      name: '', 
      leaf: true, // 只有一个节点
      iconCls: 'fa fa-users',
      children:[
      	{
      		path: 'customer',
      		component: Customer,
      		name: '预约客户'
      	}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '广告推广',
      iconCls: 'fa fa-location-arrow',
      leaf: false,
      children:[
      	{
      		path: 'sourse',
      		name: '渠道统计',
      		component: Sourse,
      	},
      	{
      		path: 'homePage',
      		name: '首页更新',
      		component: HomePage,
      	}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'fa fa-cog',
      leaf: true, // 只有一个节点
      children:[
      	{
      		path: 'sets',
      		component: Sets,
      		name: '系统设置'
      	}
      ]
    }
  ];

  export default routes;

