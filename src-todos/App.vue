<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addTodo="addTodo"/>
      <ToDoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <ToDoFooter :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted" />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'
  import storageUtil from './ultils/storageUtil'
    export default {

        //初始化数据
      data(){
     return{
       //从localStorage中读取存储的todos数据
       todos:storageUtil.readTodos()

     }
      },
      methods:{
        addTodo(todo){
           this.todos.unshift(todo)
        },
        deleteTodo(index){
          this.todos.splice(index,1)
        },
        selectAll(check){
          this.todos.forEach(todo =>todo.completed=check)
        },
        deleteCompleted(){
        //    过滤到为TRUE的
         this.todos = this.todos.filter(todo =>!todo.completed)
        }

      },
      watch:{
       todos:{
         deep:true,  //深度监视
         handler:function (newValue) {
           //获取新的额todos 存到localStorage
           // storageUtil.saveTodos(newValue)
         storageUtil.saveTodos(newValue)
         }
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
