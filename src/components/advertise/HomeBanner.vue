<template>
	<div id="HomeBanner">
		<div class="toolBar">
			<el-button type="primary" @click="uploadImg">新增banner图</el-button>
		</div>
		<el-dialog
		title="新增banner图"
		:visible.sync="addImgVisible"
		size="tiny"
		:before-close="handleClose">
		<el-form :model="formImgInfo"  :rules="formImgRules" label-width="80px" >
			<el-form-item label="序号" prop="sort">
				<el-input v-model="formImgInfo.sort"></el-input>
			</el-form-item>
			<el-form-item label="替换文字" prop="describe">
				<el-input v-model="formImgInfo.describe"></el-input>
			</el-form-item>
			<el-form-item label="上传图片" prop="describe">
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
		<el-form-item label="重要提示">
			<p>仅支持jpg格式图片，建议尺寸2400像素*600像素</p>
		</el-form-item>
	</el-form>
	<span slot="footer" class="dialog-footer">
		<el-button @click="addImgVisible = false">取 消</el-button>
		<el-button type="primary" @click="addImgVisible = false">确 定</el-button>
	</span>
</el-dialog>
</div>
</template>
<script>
	export default{
		data(){
			return{
				addImgVisible: false,
				formImgInfo:{
					sort: 0,
					describe: ''
				},
				imageUrl: '',
				formImgRules:{
					sort:[
					{ required: true, message: '序号不能为空'},
					{ type: 'number', message: '必须为数字值'}
					],
					describe:[
					{
						required: true, message: '图片替换文字不能为空'
					}]
				}
			}
		},
		methods: {
			uploadImg(){
				this.addImgVisible = true
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => {});
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
	#HomeBanner{
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
