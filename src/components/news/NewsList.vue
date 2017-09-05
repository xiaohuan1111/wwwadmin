<template>
	<div id="newsClassify">
		<div class="header">
			<div class="serach">
				<el-form :inline="true" :model="newsSerachForm" >
					<el-form-item>
					<el-input v-model="newsSerachForm.title" placeholder="新闻标题"></el-input>
					</el-form-item>
					<el-form-item>
						<el-select v-model="newsSerachForm.sort" placeholder="所属分类">
							<el-option label="玩胜新闻" value="xw"></el-option>
							<el-option label="行业资讯" value="zx"></el-option>
							<el-option label="最新活动" value="hd"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-form-item>
						    <el-col :span="11">
						      <el-date-picker type="date" placeholder="发布日期" v-model="newsSerachForm.date" 
						      ></el-date-picker>
						    </el-col>
						    </el-col>
						</el-form-item>
					</el-form-item>
					<el-form-item>
						<el-select v-model="newsSerachForm.author" placeholder="作者">
							<el-option label="源源" value="author1"></el-option>
							<el-option label="zoey" value="author2"></el-option>
							<el-option label="缓缓" value="author3"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="warning" @click="onSubmit">筛选</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="statistic">
				<el-row>
					<el-col :span="12">
						<p class="fontData">{{ countNews }}</p>
						<p>文章总数</p>
					</el-col>
					<el-col :span="12">
						<p class="fontData">{{ countVisiable }}</p>
						<p>显示文章</p>
					</el-col>
					<el-col :span="24">
						<el-button type="warning" >发新闻</el-button>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="newsListTable">
			<el-table
			    :data="tableData"
			    border>
			     <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      prop="index"
			      label="新闻编号"
			      width="100">
			    </el-table-column>
			    <el-table-column
			      prop="newsDetail"
			      label="新闻信息"
			      min-width="480">
			     	<template scope="scope">
			     		<el-row class="newsDetailTemp">
			     			<el-col :span="6">
			     				<div class="imgBox">
			     					<img :src="scope.row.newsDetail.thumbImg" alt="">
			     				</div>
			     			</el-col>
			     			<el-col :span="18">
			     				<p class="title">{{ scope.row.newsDetail.newsTit }}</p>
			     				<p>{{ scope.row.newsDetail.newsDescribe }}</p>
			     			</el-col>
			     		</el-row>
			     	</template>
			    </el-table-column>
			    <el-table-column
			      prop="newsSort"
			      width="140"
			      label="所属分类">
			    </el-table-column>
			    <el-table-column
			      prop="newsAuthor"
			      label="作者/发布人"
			      :filters="[{ text: 'zoey', value: 'zoey' }, { text: '媛媛', value: '媛媛' }]"
			      :filter-method="filterName"
			      width="140"
			      filter-placement="bottom-end">
			      <template scope="scope">
			        <el-tag
			          :type="scope.row.newsAuthor === '媛媛' ? 'primary' : 'success'"
			          close-transition>{{scope.row.newsAuthor}}</el-tag>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="发布时间"
			      sortable
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="newsSort"
			      width="140"
			      label="所属分类">
			    </el-table-column>
			    <el-table-column 
			    	label="操作" 
			    	width="140">
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
		<div class="toolbar alignRight">
			 <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</div>
	</div>
</template>
<script>
export default{
  data() {
      return {
        newsSerachForm: {
          title: '',
          sort: '',
          date: '',
          author: ''
        },
        currentPage: 1,
        countNews: 8,
        countVisiable: 8,
        tableData: [
	        {
	        	index: 1,
	            date: '2016-08-11',
	            newsAuthor: 'zoey',
	            newsDetail:{
	            	'thumbImg': 'http://www.wantsea.com/news/newsin/img/26/1.jpg',
	            	'newsTit': '玩胜体能第3家店进驻深圳福田华强北茂业啦！3重优惠派送中~',
	            	'newsDescribe': '福田区的喜讯真的是一波接着一波~，首都体育学院授权挂牌机构：玩胜体能（3-15岁）青少儿体能训练中心7月份刚进驻完侨香Hi Running购物中心，8月份又来到福田华强北茂业天地啦！！'
	            },
	            newsSort: '最新活动'
	        }, 
	        {
	        	index: 2,
	          	date: '2016-05-04',
	          	newsAuthor: 'zoey',
	          	newsDetail:{
	            	'thumbImg': 'http://www.wantsea.com/news/industry/img/10/1.jpg',
	            	'newsTit': 'TED小动画告诉你：体育运动有益于身心健康',
	            	'newsDescribe': 'TED小动画告诉你：体育运动有益于身心健康,体育运动使人正确认识自我,改善情绪，培养意志，树立自信，一起去做运动吧！'
	            },
	          	newsSort: '玩胜新闻'
	        }, 
	        {
	        	index: 3,
	            date: '2016-05-01',
	            newsAuthor: '媛媛',
	            newsDetail:{
	            	'thumbImg': 'http://www.wantsea.com/news/industry/img/10/1.jpg',
	            	'newsTit': 'TED小动画告诉你：体育运动有益于身心健康',
	            	'newsDescribe': 'TED小动画告诉你：体育运动有益于身心健康,体育运动使人正确认识自我,改善情绪，培养意志，树立自信，一起去做运动吧！'
	            },
	            newsSort: '行业资讯'
	        }, 
	        {
	        	index: 4,
	            date: '2016-05-03',
	            newsAuthor: '媛媛',
	            newsDetail:{
	            	'thumbImg': 'http://www.wantsea.com/news/industry/img/10/1.jpg',
	            	'newsTit': 'TED小动画告诉你：体育运动有益于身心健康',
	            	'newsDescribe': 'TED小动画告诉你：体育运动有益于身心健康,体育运动使人正确认识自我,改善情绪，培养意志，树立自信，一起去做运动吧！'
	            },
	            newsSort: '行业资讯'
	        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      filterName(value, row) {
        return row.newsAuthor === value;
      },
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
  }
</script>
<style lang="scss">
	@import '../../assets/css/common';
	#newsClassify{
		.header{
			display: flex;
			background-color: #fff;
			padding:10px;
			margin-bottom: 5px;
			.serach{
				flex: 1 1 80%;
				display: flex;
				align-items: center;
			}
			.statistic{
				flex: 0 0 20%;
				display: flex;
				justify-content: center;
				border-left:1px solid #EFF2F7;
				text-align: center;
				.fontData{
					font-weight: 600;
					font-size: 18px;
					color:$colorWarning;
					height:24px;
					line-height: 24px;
				}
				button{
					margin-top:10px;
				}
			}
		}
		.newsListTable{
			.newsDetailTemp{
				padding: 10px;
			}
			.imgBox{
				width:100px;
				height:100px;
				overflow:hidden;
				img{
					height:100%;
				}
			}
			.title{
				font-size: 16px;
				margin-bottom:4px;
				color: $colorPrimary;
			}
			.describe{

			}
			
		}
		.alignRight{
			text-align: right;
		}
		
	}

</style>