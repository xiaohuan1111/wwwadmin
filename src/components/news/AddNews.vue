<template>
	<div id="addNews">
		<el-form ref="form" :model="form" label-width="120px">
			<el-form-item label="新闻标题">
				<el-col :span="12">
					<el-input v-model="form.title"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="新闻描述">
				<el-col :span="12">
					<el-input type="textarea" :rows="textareaRows" v-model="form.describe"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="标题图片">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="关键词">
				<el-col :span="12">
					<el-input v-model="form.keywords" placeholder="5-7个关键词，用逗号隔开"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="作者/发布人">
				<el-select v-model="form.author" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
				<el-button type="primary">新增作者</el-button>
			</el-form-item>
			<el-form-item label="文章分类">
				<el-select v-model="form.sort" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
				<el-button type="primary">新增分类</el-button>
			</el-form-item>
			<el-form-item label="创建时间">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>-
					<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="编辑新闻">
				
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">提交</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				form: {
					title: '',
					describe: '',
					author: '',
					sort: '',
					keywords: '',
					date1: '',
					date2: '',
					type: [],
					resource: '',
					desc: ''
				},
				textareaRows: 3,
				imageUrl: ''
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>
<style lang="scss">
	#addNews{
		background-color:#fff;
		padding: 10px 15px;
		.avatar-uploader .el-upload {
			border: 1px dashed #d9d9d9;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.avatar-uploader .el-upload:hover {
			border-color: #20a0ff;
		}
		.avatar-uploader-icon {
			font-size: 28px;
			color: #8c939d;
			width: 178px;
			height: 178px;
			line-height: 178px;
			text-align: center;
		}
		.avatar {
			width: 178px;
			height: 178px;
			display: block;
		}
	}
</style>