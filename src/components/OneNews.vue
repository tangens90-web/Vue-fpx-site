<template>
<div>
  <div>
    <my-tabs></my-tabs>
    <div class="container">
      <div class="inner_container">
    <div class="news_block">
    <div class="photo_class" v-for="(newest,i) in onenews" :key='i'>
       onenews
    this is {{$route.params.ID}}
    <div v-for="part in onenews" :key="part.id"> {{part.tab}}</div>
      <div class="">
        <div class="">
      <div class="info_photo">
      <!-- <img :src="newest.img" alt=""> -->
      </div>
      <div class="info_description">
      <h2>{{newest.title}}</h2>
      <p>{{newest.desc}}</p>
      </div>
      </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
 <my-links></my-links>
  </div>

</template>


<script>
import MyLinks from './Links.vue'
import MyTabs from './Tabs.vue'
// import MyHeader from './Header.vue'
export default {
  data() {
    return{
    news:[],
    // onenews:[]
  }
  },
  computed:{
    onenews(){
      return this.news.filter((item)=>{
         if(this.$route.params.ID ==item.id){
           return item
         }
      })
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