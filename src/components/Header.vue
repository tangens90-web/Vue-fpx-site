<template>
  <header class="header">
        <div class="container">
          <div class="inner_container">
       <div class="name">
        <div class="left_header"><button class="nav_button" 
         @click="switcher=!switcher"
         ><span> Открыть навигацию</span>
         <transition name="switch">
         <test v-if="switcher"></test></transition>
         </button><h2><router-link :to="{name: 'MajorPart'}">{{sitename}}</router-link></h2></div><div class="right_header">
    <h2><router-link :to="{name: 'MajorPart'}">{{game}}</router-link></h2></div></div>
  <players></players></div>
        </div>  
  </header>
</template>
<script>
import Test from './Test.vue'
import Players from './Players.vue'
export default {
  data() 
  {
    return{
    sitename:"FunPlusPhoenix| Fan Site",
    game:"Valorant",
    component:'',
    switcher: false,
  }
  },
  methods:{
    // cons(){
    //   console.log("check")
    // }
  },
  components:{Players,Test}
}
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #d33e4c;
  }
  .switch-enter-active, .switch-leave-active{
    transition: opacity 2.0s ease-out;
  }
  .switch-enter, .switch-leave-to{
   opacity:0;
  }


</style>
