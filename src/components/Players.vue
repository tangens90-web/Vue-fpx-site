<template>
         
       <div class="players">
         <ul class= "player_list"><li class="player_part"  v-for="player in players" :key="player.id">
                   <img class="player_photo" :src="player.img" alt="">
                   <p class="player"> {{player.name}}</p>
               </li></ul>
       </div>
</template>


<script>


export default {
  data() 
  {
    return{
      players:[{
        id:0,
        img:"https://placehold.it/100x100",
        name:'Shao'
      },
      {
        id:1,
        img:'',
        name:'Ange1'
      },
      {
        id:2,
        img:'',
        name:'Shadow'
      },
      {
        id:3,
        img:'',
        name:'Zyppan'
      },
       {
        id:4,
        img:'',
        name:'Dimasick'
      },]
   
  }},
}
</script>