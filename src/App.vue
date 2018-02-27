<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader/>
      <ToDoMain :todos="todos"/>
      <ToDoFooter/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'
    export default {
        //初始化数据
      data(){
        return{
            todos:[
              {title:'吃饭',completed:false},
              {title:'睡觉',completed:true},
              {title:'打代码',completed:false}
            ]
        }
      },
        components:{
          ToDoHeader:Header,
          ToDoMain:Main,
          ToDoFooter:Footer
        }
    }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
