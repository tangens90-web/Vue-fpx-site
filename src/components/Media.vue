<template>
  <div>
    <my-tabs></my-tabs>
    <div class="container">
      <div class="inner_container">
    <div class=""> Здесь пока ничего нет((</div>
      </div>
    </div>
    <my-links></my-links>
  </div>
</template>


<script>
import MyLinks from './Links.vue'
import MyTabs from './Tabs.vue'
export default {
  data() {
     return{
      
    }
  },
  components:{MyTabs,MyLinks}
}
</script>