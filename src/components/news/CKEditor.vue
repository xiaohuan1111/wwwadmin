<template>
	<div id="CKEditor">
		<textarea id="TextArea" cols="20" rows="2" class="ckeditor"></textarea>
	</div>
</template>
<script>
	import '../../../static/ckeditor/ckeditor.js';
	export default{
		data(){
			return{
				
			}
		},
		methods:{

		},
		mounted(){
			CKEDITOR.replace('TextArea');
		}
	}
</script>
<style lang="scss">
	#CKEditor{

	}
</style>