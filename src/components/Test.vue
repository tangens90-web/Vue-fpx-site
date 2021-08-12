<template>
        <div class="header_link_block">
       <!-- <div class="container"> -->
           <div class="">
             <div class="header_link">
              <div class=""><router-link tag="a" :to="{name:'News'}">News</router-link></div>
         </div>
         <div class="header_link">
              <div class=""> <router-link tag="a" :to="{name:'Media'}">Media</router-link></div>
         </div>
         <div class="header_link">
              <div class=""><router-link tag="a" :to="{name:'Achieve'}">Achieve</router-link></div>
         </div>
         <div class="header_link">
              <div class=""><router-link tag="a" :to="{name:'Schedule'}">Schedule</router-link></div>
         </div>
  </div>
  <div class="left_header"><button class="close_nav_button" 
         @click="switcher=!switcher"
         ><span> Открыть навигацию</span>
         </button></div>
  </div>
        <!-- </div> -->
   
</template>


<style scoped>
a{
     text-decoration: none;
     color:white;
}
.view-name{
  color:chartreuse;
}
</style>