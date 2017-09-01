
import Home from '@/components/Home'
import Login from '@/components/Login'

import Dashboard from '@/components/Dashboard'

import Customer from '@/components/Customer'

import HomeBanner from '@/components/advertise/HomeBanner'
import SocialMedia from '@/components/advertise/SocialMedia'
import BaseInfo from '@/components/advertise/BaseInfo'


import NewsClassify from '@/components/news/NewsClassify'
import NewsList from '@/components/news/NewsList'
import AddNews from '@/components/news/AddNews'

import Sets from '@/components/Sets'


let routes = [
    {
      path: '/login',
      component: Login,
      hidden: true,
      index: '1'
    },
    {
      path: '/',
      component: Home,
      name: '', 
      index: '2',
      leaf: true, // 只有一个节点
      iconCls: 'fa fa-home',
      children:[
      	{
      		path: 'dashboard',
      		component: Dashboard,
      		name: '首页',
          index: '2-1',
      	}
      ]

    },
	{
      path: '/',
      component: Home,
      name: '', 
      leaf: true, // 只有一个节点
      iconCls: 'fa fa-users',
      index: '3',
      children:[
      	{
      		path: 'customer',
      		component: Customer,
      		name: '预约客户',
          index: '3-1',
      	}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '广告推广',
      iconCls: 'fa fa-location-arrow',
      leaf: false,
      index: '4',
      children:[
        {
          path: 'baseInfo',
          name: '公司信息',
          component: BaseInfo,
          index: '4-1'
        },
      	{
      		path: 'socialMedia',
      		name: '社交媒体',
      		component: SocialMedia,
          index: '4-2',
      	},
      	{
      		path: 'homeBanner',
      		name: '首页banner',
      		component: HomeBanner,
          index: '4-3',
      	}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '新闻管理',
      iconCls: 'fa fa-newspaper-o',
      index: '5',
      leaf: false,
      children:[
        {
          path: 'newsClassify',
          name: '新闻分类',
          component: NewsClassify,
          index: '5-1'
        },
        {
          path: 'newsList',
          name: '新闻列表',
          component: NewsList,
          index: '5-2'
        },
        {
          path: 'addNews',
          name: '添加新闻',
          component: AddNews,
          index: '5-3'
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'fa fa-cog',
      leaf: true, // 只有一个节点
      index: '6',
      children:[
      	{
      		path: 'sets',
      		component: Sets,
      		name: '系统设置',
          index: '6-1',
      	}
      ]
    }
  ];

  export default routes;

