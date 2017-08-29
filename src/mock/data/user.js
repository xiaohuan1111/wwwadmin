import Mock from 'mockjs'

const loginUser = [
	{
		id: 1,
		username: 'admin',
		password: '123456',
		avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
		name: '张某某'
	}
];
const Customers = [];

for (var i = 0; i <86; i++) {
	Customers.push(Mock.mock({
		'id|+1':1,
		'name': Mock.mock('@cname'),
		'mobile|1':/^1[0-9]{10}$/ ,
		'age|3-15':1,
		'classrome|1': ['后海卓越馆','侨香HighRunning馆','华强北茂业馆'],
		'from': '官网',
		'date': Mock.mock('@date')
	}))
}

export {loginUser, Customers}