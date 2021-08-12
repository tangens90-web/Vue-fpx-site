<template>
  <div>
    <my-tabs></my-tabs>
    <div class="container">
      <div class="inner_container">
      <div class="schedule_table">
     <h2> Грядущие игры: </h2>
               <table>
                 <tr>
                   <td>Турнир</td>
                   <td>Дата начала</td>
                   <td>Время начала(по Мск)</td>
                   <td>Соперник</td>
                   <td>Текущий Счёт</td>
                   <td>Ссылка</td>
                 </tr>
                 <tr>
                   <td>First Strike</td>
                   <td>29.11.2020</td>
                   <td>14:00</td>
                   <td>G2</td>
                   <td>2:0</td>
                   <td><a href="https://vk.com/feed"> tw2tt2t</a></td>
                 </tr>
               </table>
                <h2> Недавние игры: </h2>
                <table>
                  <tr>

                    <td>Турнир</td>
                    <td>Дата начала</td>
                    <td>Время начала(по Мск)</td>
                    <td>Соперник</td>
                    <td>Счёт</td>

                  </tr>
                  <tr>
                    <td>First Strike</td>
                    <td>29.11.2020</td>
                    <td>14:00</td>
                    <td>G2</td>
                    <td>2:0</td>
                  </tr>
                </table>
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
      upcoming_games:[
        {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
         link:""
      },
      ],
      recent_games:[
        {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
         link:""
      },
      {
         tourney:"First Strike",
         begdata:"29.01.2021",
         begtime:"14:00",
         enemy:"G2",
         score:"2-0",
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
  .schedule_table{
    overflow-x: auto;
    margin-left: 0 auto;
    padding-top: 1px;
  }
</style>