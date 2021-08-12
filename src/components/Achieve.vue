<template>

  <div>
    <my-tabs></my-tabs>
    <div class="container">
      <div class="inner_container">
      <div class="achieve_table">
     <h2> Турниры </h2>
     <div class="table_block">
               <table>
                 <tr >
                   <td>Турнир</td>
                   <td>Время Проведения</td>
                   <td>Место</td>
                   <td></td>
                   <td>ССылка</td>
                 </tr>
                 <tr v-for="(game,i) in achieve" :key='i'>
                   <td>{{game.tourney}}</td>
                   <td>{{game.begdata}}</td>
                   <td>{{game.place}}</td>
                   <td><img :src="game.img" alt=""></td>
                   <td><a href="https://vk.com/feed"> tw2tt2t</a></td>
                 </tr>
               </table>
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
export default {
  data() {
     return{
      achieve:[
        {
         tourney:"First Strike",
         begdata:"29.01.2021",
         place:"3-4",
         img:"static/images/logo.png",
         link:"https://vk.com/feed"
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         place:"3-4",
         img:"static/images/logo.png",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         place:"3-4",
         img:"static/images/logo.png",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         place:"3-4",
         img:"static/images/logo.png",
         link:""
      },
    {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         place:"3-4",
         img:"static/images/logo.png",
         link:""
      },
        ]
    }
  },
  components:{MyTabs,MyLinks}
}
</script>



<style >
table { 
    width: 100%; /* Ширина таблицы */
    border: 2px solid black; /* Рамка вокруг таблицы */
    background: silver; /* Цвет фона таблицы */
   }
  td{
    color: white;
    border: 2px solid black;
  }
   td img{
    width: 150px;
    height: 150px;
  }
  .achieve_table{
    overflow-x: auto;
    margin-left: 0 auto;
    padding-top: 1px;
  }
  .table_block{
    margin: 0 auto;
  }
</style>