<template>
  <div class="home">
    <div id="homeHeader">
      <div class="logo" :class="{ NavShow : !isCollapse}">
        <span v-if="!isCollapse">WWW AdMINM</span>
      </div>
      <div class="toolBar" v-model="isCollapse">
       <i class="fa fa-bars" @click="isCollapse = !isCollapse"></i>
     </div>
     <div class="userCenter">

     </div>
   </div>
   <div id="homeMain">
    <div class="mainNav" :class="{ NavCollapse : !isCollapse , NavShow : isCollapse}">
      <el-menu router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template v-for="(item, key) in $router.options.routes" v-if="!item.hidden">
          <el-submenu v-if="!item.leaf" index="1">
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
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keypath){
        console.log(key, keypath);
        console.log(this.$router.options)
      },
      handleClose(key, keypath){
        console.log(key, keypath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    .toolBar{
      width:60px;
      height:60px;
      text-align: center;
      line-height: 60px;
      color:#fff;
    }
    .NavShow{
      flex: 0 0 200px;
    }
  }
  #homeMain{
    flex:auto;
    display: flex;
    .mainNav{
      background-color:#eee;
    }
    .NavCollapse{
      flex: 0 0 200px;
    }
    .NavShow{
      flex: 0 0 64px;
    }
    .mainContain{
      flex: auto;
      padding:0 5px;
      overflow: auto;
    }
  }
</style>
