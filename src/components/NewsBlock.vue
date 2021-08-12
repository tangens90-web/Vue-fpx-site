<template>
    <div class="container">
      <div class="inner_container">
    <div class="news_block">
    <div class="photo_class" v-for="(news,i) in newBlock" :key='i'>
      <div class="link_block">
      <router-link :to="{name:'NewsApart', params:{ID:news.id}}">
        <div class="link_inside">
      <div class="info_photo">
      <img :src="'/'+news.img" alt="">
      </div>
      <div class="info_description">
      <h2>{{news.title}}</h2>
      <p>{{news.desc}}</p>
      </div>
      </div>
        </router-link></div></div>
      </div>
    </div>
    </div>
    

 
  
</template>


<script>
import MyLinks from './Links.vue'
import MyTabs from './Tabs.vue'
export default {
  props:["n"],
  data() {
     return{
      news:[],
    }
  },
  computed:{
    newBlock(){
       return this.news.filter(item=>{
           if(this.$route.params.NUM == undefined ||this.$route.params.NUM =="1"){
               return item.id<4
           }
           else{
             return item.id<=this.$route.params.NUM*this.n && item.id>(this.$route.params.NUM-1)*this.n 
            
           }
         }
       )

    }
  },
  components:{MyTabs,MyLinks},
  created:function(){
    axios.get('../static/News.json').then((response)=>{
      this.news = response.data.news;
      console.log(this.news)
    })
  },
}
</script>