<template>
	<div id="addNews">
		<el-form ref="form" :model="form" :rules="addNewsRules" label-width="120px">
			<el-form-item label="新闻标题" prop="title">
				<el-col :span="12">
					<el-input v-model="form.title"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="新闻描述" prop="describe">
				<el-col :span="12">
					<el-input type="textarea" v-model="form.describe" :rows="textareaRows" ></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="关键词" prop="keywords">
				<el-col :span="12">
					<el-input placeholder="5-7个关键词，用逗号隔开"></el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="标题图片" prop="titleImg">
				<el-input type="text" v-model="form.titleImg" disabled="true" placeholder="必填项：标题图片格式要求.jpg,建议尺寸640像素×400像素"></el-input>
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
			<el-form-item label="编辑新闻" prop="newsContent">
				<textarea id="TextArea" v-model="form.newsContent" cols="20" rows="2" class="ckeditor"></textarea>
			</el-form-item>
			<el-form-item label="作者/发布人" prop="author">
				<el-select v-model="form.author" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
				<el-button type="default">新增作者</el-button>
			</el-form-item>
			<el-form-item label="文章分类" prop="sort">
				<el-select v-model="form.sort" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
				<el-button type="default">新增分类</el-button>
			</el-form-item>
			<el-form-item label="创建时间" prop="dateDay">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.dateDay"></el-date-picker>
				</el-col>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click.prevent="onSubmit">提交</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	// import '../../../static/ckeditor/ckeditor.js';
	export default{
		data() {
			return {
				form: {
					title: '',
					describe: '',
					keywords: '',
					titleImg: '',
					newsContent: '',
					author: '',
					sort: '',
					dateDay: '',
					desc: ''
				},
				textareaRows: 3,
				imageUrl: '',
				addNewsRules: {
					title: [
						{ required: true, message: '新闻标题', trigger: 'blur' }
					],
					describe: [
						{ required: true, message: '请选择活动区域', trigger: 'blur' }
					],
					keywords: [
						{required: true, message: '输入5-7个关键词，使用逗号分隔开', trigger: 'blur' }
					],
					titleImg: [
						{required: true }
					],
					newsContent: [
						{ required: true, message: '文章文本不能为空', trigger: 'blur' }
					],
					author: [
						{required: true, message: '请选择作者/发布人', trigger: 'change' }
					],
					sort: [
						{ required: true, message: '选择文章分类', trigger: 'change' }
					],
					dateDay: [
						{ type: 'date', required: true, message: '请选择日期', trigger: 'change'}
					]
				}
			}
		},
		methods: {
			onSubmit() {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
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
		},
		mounted(){
			CKEDITOR.replace('TextArea');
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