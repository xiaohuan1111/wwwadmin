import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
import {loginUser, Customers} from '@/mock/data/user'


export default {
	bootstrap(){
		let mock = new mockAdapter(axios);
		// 登录
		mock.onPost('/login').reply(config => {
			let {userName, passWord} = JSON.parse(config.data);
			return new Promise((resolve, reject) => {
				let user = null;
				setTimeout(() => {
					let hasUser = loginUser.some(u => {
						if (u.username === userName && u.password === passWord) {
							user = JSON.parse(JSON.stringify(u));
							user.password = undefined;
							return true;
						}
					});

					if (hasUser) {
						resolve([200, { code: 200, msg: '请求成功', user }]);
					} else {
						resolve([200, { code: 500, msg: '账号或密码错误' }]);
					}
				}, 1000);
			});
		});

		// 获取客户列表
		mock.onGet('/customer/list').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, { code: 200, data: Customers }])
				}, 1000)
			})
		});

		// 获取分页用户列表
		mock.onGet('/customer/listPage').reply( config => {
			console.log(config)
			//let {pageSize, currentPage} = config.data;
			//let totle = Customers.length;
			/*var customerPage = Customers.filter((u, index) => {
				return index < currentPage * pageSize &&  index > (currentPage - 1) * pageSize
			});
			return new Promise(() => {
				setTimeout(() => {
					resolve(200,{code: 200, totlePage: totle,data: customerPage })
				},1000)
			})*/
		})
	}
}