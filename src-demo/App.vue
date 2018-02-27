<template>
  <!--一个根标签-->
  <div>
    <h2>第一个项目</h2>
    <img  class="logo" src="./assets/logo.png" alt="logo">
    <HelloWord/>
  </div>

</template>

<script>
  import HelloWord from './components/HelloWorld'
    export default {
          components:{
            HelloWord
          }
    }
</script>

<style>
.logo{
  width: 100px;
  height: 100px;
}
</style>
