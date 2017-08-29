<template>
	<div id="customer">
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column type="selection" width="55"></el-table-column>
    	<el-table-column prop="name" label="姓名"width="120"></el-table-column>
    	<el-table-column prop="age" label="年龄" width="120"></el-table-column>
    	<el-table-column prop="mobile" label="手机" width="160"></el-table-column>
    	<el-table-column prop="age" label="场馆" width="120"></el-table-column>
		<el-table-column prop="date" label="日期" width="120" ><template scope="scope">{{ scope.row.date }}</template>
    	</el-table-column>
		<el-table-column label="操作">
			<template scope="scope">
				<el-button
				size="small"
				@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				<el-button
				size="small"
				type="danger"
				@click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	<div class="block">
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="listTotal">
	</el-pagination>
	</div>
</div>
</template>
<script>
	import { customerListPage } from '@/api/api'
	export default{
		data(){
			return{
				tableData: [],
				pageSize: 10,
				listTotal: 0,
				currentPage: 1
			}
		},
		methods:{
			getCustomerList(){
				let para = { pageSize: this.pageSize, currentPage: this.currentPage };
				customerListPage(para).then((res) => {
					//this.tableData = res.data.data
				})
			},
			handleEdit(){

			},
			handleSizeChange(size){
				this.pageSize = size;
			},
			handleCurrentChange(page){
				this.currentPage = page;
			}
		},
		mounted(){
			this.getCustomerList()
		}
	}
</script>
<style lang="scss">
	#customer{
		
	}
</style>