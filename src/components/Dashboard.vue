<template>
	<div id="dashboard">
		<el-row>
			<el-col :span="12">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span style="line-height: 36px;">日访问量</span>
					</div>
					<div class="text item">
						<div class="cardbox" id="visitor"></div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span style="line-height: 36px;">访问渠道来源</span>
					</div>
					<div class="text item">
						<div class="cardbox" id="sourse"></div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import echarts from 'echarts'
	export default{
		data(){
			return{
			}
		},
		methods:{
			visitorChart(){
				let myChart = echarts.init(document.getElementById('visitor'));
				// 绘制图表
				myChart.setOption( {
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['日访问量','预约客户'],
						x: 'right'
					},
					calculable : true,
					xAxis : [
					{
						type : 'category',
						boundaryGap : false,
						data : ['周一','周二','周三','周四','周五','周六','周日']
					}
					],
					yAxis : [
					{
						type : 'value'
					}
					],
					series : [
						{
							name:'日访问量',
							type:'line',
							smooth:true,  
							data:[120, 132, 101, 134, 90, 230, 210],
							itemStyle : { normal: {label : {show: true}}},
						},
						{
							name:'预约客户',
							type:'bar',
							smooth:true,  
							data:[0, 0, 1, 2, 1, 0, 3],
							itemStyle : { normal: {label : {show: true}}},
						}
					]
				});
			},
			sourseChart(){
				let myChart = echarts.init(document.getElementById('sourse'));
				// 绘制图表
				myChart.setOption( {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
					},
					series: [
					{
						name:'访问来源',
						type:'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: true,
								position: 'outside',
								formatter: '{b} : {c} 人\n{d}%'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: true
							}
						},
						data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
						]
					}
					]
				});
			},
			drawCharts(){
				this.visitorChart();
				this.sourseChart();
			}
		},
		mounted(){
			this.drawCharts();
		}
	}
</script>
<style lang="scss">
	#dashboard{
		.cardbox{
			width:100%;
			height:400px;
		}
	}
</style>