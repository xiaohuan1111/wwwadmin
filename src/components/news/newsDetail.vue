<template>
	<div class="newsDetailBox">
		<div>
			<div class="itemLeft">
				<div class="imgBox">
					<img class="thumbImg" :src="{{ newsDetail.thumbImg }}" alt="">
				</div>
			</div>
			<div class="itemRight">
				<p class="title">{{ newsDetail.newsTit }}</p>
				<p class="describe">{{ newsDetail.newsDescribe }}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props: ["newsDetail"]
	}
</script>
<style lang="scss">
	.newsDetailBox{
		.imgBox{
			width:100px;
			height:100px;
			display: flex;
			align-items: center;
			img{
				width:100%;
			}
		}
	}
</style>