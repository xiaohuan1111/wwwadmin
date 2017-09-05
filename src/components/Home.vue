<template>
  <div class="home">
    <div id="homeHeader">
      <div class="logo" :class="{ NavShow : !isCollapse}">
        <span v-if="!isCollapse">WWW AdMINM</span>
      </div>
      <div class="toolbox">
          <div class="toolBar" v-model="isCollapse">
            <i class="fa fa-bars" @click="isCollapse = !isCollapse"></i>
          </div>
          <div class="userCenter">
            <span>{{sysUserName }}</span>
            <img :src="sysUserAvatar">
          </div>
      </div>
  </div>
  <div id="homeMain">
    <div class="mainNav" :class="{ NavCollapse : !isCollapse , NavShow : isCollapse}">
      <el-menu router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened>
        <template v-for="(item, key, index) in $router.options.routes" v-if="!item.hidden" >
          <el-submenu v-if="!item.leaf" :index="item.index" :key="item.path">
            <template slot="title">
              <i :class="item.iconCls"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{ child.name }}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf" :index="item.children[0].path" :key="item.children[0].path">
            <i :class="item.iconCls"></i>
            <span slot="title">{{item.children[0].name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="mainContain">
      <div class="pathBar"> 
          <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        sysUserName :'',
        sysUserAvatar: ''
      }
    },
    methods: {
      handleOpen(key, keypath){
        console.log(key, keypath);
        console.log(this.$router.options)
      },
      handleClose(key, keypath){
        console.log(key, keypath);
      },
      getLoginUser(){
        let loginUser = sessionStorage.getItem('user');
        if(loginUser){
          loginUser = JSON.parse(loginUser);
          this.sysUserName = loginUser.name;
          this.sysUserAvatar = loginUser.avatar;
        }
      }
    },
    mounted(){
      this.getLoginUser();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .home{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #homeHeader{
    display: flex;
    flex: 0 0 60px;
    height: 60px;
    background-color:#20A0FF;
    .logo{
      line-height: 60px;
      text-align: center;
      color:#fff;
    }
    .NavShow{
      flex: 0 0 200px;
    }
    .toolbox{
      display: flex;
      justify-content: space-between;
      width:100%;
        .toolBar{
          width:60px;
          height:60px;
          text-align: center;
          line-height: 60px;
          color:#fff;
        }
        .userCenter{
          display: flex;
          align-items: center;
          span{color:#fff;}
          img{
            height:40px;
            margin:10px;
            border-radius: 50%;
          }
        }
    }
    
    
  }
  #homeMain{
    flex:auto;
    display: flex;
    min-width:1208px;
    background-color:#F9FAFC;
    .mainNav{
      background-color:#eef1f6;
    }
    .NavCollapse{
      flex: 0 0 200px;
    }
    .NavShow{
      flex: 0 0 64px;
    }
    .pathBar{
      text-align: right;
      padding:5px;
      background-color: #fff;
      margin:0 0 5px 0;
    }
    .mainContain{
      flex: auto;
      padding:5px;
      overflow: auto;
    }
  }
</style>
