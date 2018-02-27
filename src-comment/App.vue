<template>
    <div>
      <div>
        <header class="site-header jumbotron">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div class="container">
          <!--应用标签-->
          <Add :addComment="addComment"/>
          <List :comments="comments" :deleteComment="deleteComment" />
        </div>
      </div>
    </div>
</template>

<script>
//引入组件
  import Add from './components/Add'
  import List from './components/List'
    export default {
    //初始化数据
      data(){
        return {
          comments:[
            {name:'张三',content:'vue so easy'},
            {name:'李四',content:'vue so hard'},
            {name:'王二',content:'vue so so'}
          ]
        }


      },
      methods:{
        addComment(comment){
             this.comments.unshift(comment)
        },
        deleteComment(index){
          this.comments.splice(index,1)
        }
      },
    //   映射为标签
      components:{
        Add,
        List
      }
    }
</script>

<style scoped>

</style>
