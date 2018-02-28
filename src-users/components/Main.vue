<template>
  <div>
    <h2 v-if="firstView">请输入关键字搜索</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errMsg">{{errMsg}}</h2>

    <div class="row" >
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  import  axios from 'axios'
    export default {
    //初始化数据
      data(){
        return{
          firstView:true,
          loading:false,
          errMsg:'',
          users:''

        }
      },
      mounted(){
      //  订阅消息
        PubSub.subscribe('search',(message,searchName)=>{
        //  请求前更新状态
          this.firstView = false
          this.loading = true
          this.users=[]
          this.errMsg = ''
        //  发请求
       const url = `https://api.github.com/search/users?q=${searchName}`
          axios.get(url)
            .then(response =>{
              //  请求成功
              const result = response.data
              this.loading = false
              this.users = result.items.map(item =>({
                url:item.html_url,
                avatar:item.avatar_url,
                name:item.login,
              }))

            })
            .catch(error=>{
              //  请求失败
              this.loading = false
              this.errMsg = '请求失败！'
            })
        })
      }
    }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
