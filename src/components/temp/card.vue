<template>
	<div id="newsClassify">
		<div class="cardBox">
			<div class="itemCard warmCard">
				<div class="cardTit">玩胜新闻</div>
				<div class="cardInfo">3</div>
			</div>
			<div class="itemCard warmCard">
				<div class="cardTit">最新活动</div>
				<div class="cardInfo">3</div>
			</div>
			<div class="itemCard warmCard">
				<div class="cardTit">行业资讯</div>
				<div class="cardInfo">3</div>
			</div>
			<div class="itemCard blueCard">
				<div class="cardTit">文章总数</div>
				<div class="cardInfo">9</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="scss">
	@import '../../assets/css/common';
	#newsClassify{

	}
	.cardBox{
		display: flex;
		.itemCard{
			flex: auto;
			height:80px;
			margin:0 10px;
			border-radius: 4px;
			.cardTit{
				font-size: 16px;
				padding:10px 15px;
			}
			.cardInfo{
				padding:15px;
			}
		}
		.warmCard{
			border:1px solid $warmBorder;
			.cardTit{
				color:$warmFont;
				background-color: $warmBg;
				border-bottom: 1px solid $warmBorder;
			}
		}
		.blueCard{
			border:1px solid $greenBorder;
			.cardTit{
				color:$greenFont;
				background-color: $greenBg;
				border-bottom: 1px solid $greenBorder;
			}
		}

	}
</style>