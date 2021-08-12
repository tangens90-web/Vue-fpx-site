<template>
  <div>
    <my-header></my-header>
      <section class="main_content">
       <div class="container">
         <div class="inner_container">  
           <div class="tabs">
             <div class="inner_tab" v-for="(tab,i) in tabs" :key="i"> 
              <div class="tab" ><router-link tag="a" :to="{name: `${tab.way}`}">{{tab.name}}</router-link></div>
         </div>
         
  </div>
  </div>
  </div>
   </section>
  </div>
 
</template>



<script>
import MyHeader from './Header.vue'
export default {
  data() {
    return {
      tabs:[
        {way:'News', name:"News"},
        {way:'Media', name:"Media"},
        {way:'Achieve', name:"Achieve"},
        {way:'Schedule', name:"Schedule"}],
      products:[]
    }
    
  },
  // created:function(){
  //   axios.get('./static/products.json').then((response)=>{
  //     this.products = response.data.products;
  //     console.log(this.products)
  //   })
  // },
  components:{MyHeader}
}
</script>



