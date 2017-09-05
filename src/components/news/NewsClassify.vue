<template>
	<div id="newsClassify">
		<div class="toolbar">
			<el-button type="primary" @click="addItemFn">新增分类</el-button>
		</div>
		<div class="classifyList">
			<el-table
			:data="tableData"
			border
			style="width: 100%">
			<el-table-column
			label="id"
			property="id"
			width="180">
		</el-table-column>
		<el-table-column
		label="排序"
		property="sort"
		width="180">
	</el-table-column>
	<el-table-column
	label="名称"
	property="name"
	width="180">
</el-table-column>
<el-table-column
label="类型"
property="type"
width="180">
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
</div>
<div class="addNew">
	<el-dialog title="新增新闻分类" :visible.sync="dialogFormVisible">
		<el-form :model="addItem">
			<el-form-item label="分类名称" :label-width="formLabelWidth">
				<el-input v-model="addItem.name" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="分类序号" :label-width="formLabelWidth">
				<el-input v-model="addItem.sort" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item>
				 <el-checkbox v-model="addItem.visiable">显示此分类</el-checkbox>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		</div>
	</el-dialog>
</div>	
</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				dialogFormVisible: false,
				addItem: {
					name: '',
					sort: '',
					visiable: true
				},
				tableData: [
				{
					id: '1',
					sort: '3',
					name: '行业资讯',
					type: '1'
				}, {
					id: '2',
					sort: '2',
					name: '最新活动',
					type: '1'
				}, {
					id: '3',
					sort: '1',
					name: '玩胜新闻',
					type: '1'
				}]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			addItemFn(){
				this.dialogFormVisible = true;
			}
		}
	}
</script>
<style lang="scss">
	#newsClassify{
		
	}
</style>