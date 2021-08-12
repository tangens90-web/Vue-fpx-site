<template>
<div>
  <my-tabs></my-tabs>
    <news-block :n="n"></news-block>
    <div class="container">
      <div class="nums_block">
    <div v-for="(num,i) in nums" :key="i">
      <transition name="nums_in">
    <router-link tag="button" class="nums" active-class="active" :to="{name:'NumsPage', params:{NUM: i+1 }}"> {{i+1}}</router-link>
    </transition>
    </div>
    </div>
    </div>
      <my-links></my-links>
    </div>
</template> 

<script>
import MyLinks from './Links.vue'
import MyTabs from './Tabs.vue'
import NewsBlock from './NewsBlock.vue'
export default {
  data() {
    return{
      news:[],
      n:3,

    }
  },
  computed:{
    nums(){
       return Math.ceil(this.news.length/this.n)
    }
  },
  created:function(){
    axios.get('../static/News.json').then((response)=>{
      this.news = response.data.news;
      console.log(this.news)
    })
  },
  
  components:{NewsBlock,MyTabs,MyLinks}
}

</script>



<style scoped>
.container{
  padding: 1px 0px;
}
.nums_block{
   margin: 20px 0;
  display: flex;
  justify-content: center;
}
.nums{
  margin: 0px 5px;
  width: 40px;
  height: 40px;
  background-color: orange;
  border-radius: 0;
}
.router-link-exact-active{
  background-color: greenyellow;
}
</style>