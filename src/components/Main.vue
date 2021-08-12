<template>
  <div>
   
    <my-news></my-news>
    
  </div>
</template>


<script>
import MyTabs from './Tabs.vue'
import MyNews from './News.vue'
export default {
  data() {
    return{
      
    }
    
  },
  components:{MyTabs,MyNews}
}
</script>