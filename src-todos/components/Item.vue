<template>
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
        props:{
          todo:Object,
          index:Number,
          deleteTodo:Function
        },
      //初始化数据
      data(){
          return{
            bgColor:'white',
            isShow:false

          }
      },
      //更新数据
      methods:{
          handleEnter(isEnter){
            if(isEnter){
                this.bgColor='#ddd',
                this.isShow =true
            }else{
                this.bgColor='white',
                this.isShow =false
            }
          },
        deleteItem(){
            const {index,todo,deleteTodo} = this
            if(window.confirm(`你确定删除${todo.title}么`)){
              deleteTodo(index)
            }
        }
      }
    }
</script>

<style>

</style>
