<template>
	<div id="customer">
	<el-row class="toolbar">
		<el-button type="primary">批量转出</el-button>
	</el-row>
	<el-table :data="tableData" border v-loading="listLoading">
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
				@click="handleOut(scope.$index, scope.row)" type="primary">转出</el-button>
				<el-button
				size="small"
				type="danger"
				@click="handleDelete(scope.$index, scope.row)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	<el-row class="toolbar">
		<div class="block" style="float:right;">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes='[10,20,30]'
				:page-size="pageSize"
				:total='total'
				layout="total,sizes,prev, pager, next,jumper"
				>
			</el-pagination>
		</div>
	</el-row>
</div>
</template>
<script>
	import { customerListPage, deleteCustomer } from '@/api/api'
	export default{
		data(){
			return{
				tableData: [],
				total: 0,
				pageSize:10,
				page: 1,
				currentPage: 1,
				listLoading: false
			}
		},
		methods:{
			getCustomerList(){
				this.listLoading = true;
				let para = {'pageSize': this.pageSize ,'currentPage': this.currentPage };
				customerListPage(para).then((res) => {
					this.listLoading = false;
					this.total = res.data.total;
					this.tableData = res.data.data;
				})
			},
			handleOut(){

			},
			handleDelete(index, row){
				let para = row;
				deleteCustomer(para).then((res) => {
					this.getCustomerList();
				})
			},
			handleSizeChange(size){
				this.pageSize = size;
				this.getCustomerList();
			},
			handleCurrentChange(page){
				this.currentPage = page;
				this.getCustomerList();
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