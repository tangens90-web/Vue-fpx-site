<template>
  <div>
  <div>
        
    <nums-page></nums-page>
  </div>
 
  </div>
</template>


<script>
import NumsPage from './NumsPage.vue'

import MyLinks from './Links.vue'
import MyTabs from './Tabs.vue'
export default {
  
  data() {
     return{
      news:[],
    }
  },
  
  components:{MyTabs,MyLinks,NumsPage},
  created:function(){
    axios.get('./static/News.json').then((response)=>{
      this.news = response.data.news;
      console.log(this.news)
    })
  },
}
</script>