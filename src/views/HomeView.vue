<script>
export default {
  data(){
    return{
descrition_text : "Welcome to Gessource, an application wich help player to manage their ressources.\n" 
+"As player you can manage your money, Pv, Mana, number of spell, etc.."
+"As GM you can use it in order to manage your npc, with their life. Note your player Pv and more"
+ "If you new click on New game to start\n " 
}
  }
}
</script>

<template>
  <div class="d-flex flex-column ">
    <img src="../img/rpg_group.jpg" alt="Représentation d'un groupe d'aventurier" class="col-6 m-auto mt-2"/>

    <!-- <p class="classroom mt-3">This application is a rpg tools. Its goal is to help 
      to manage yours ressources when you play an Rpg Games like D&D <br/>
      As player you can manage your money, Pv, number of spell by level, the number of potion, etc... <br/>
      As GM you can manage your pnc, add their life during a fight. Note your players pv, and more.</p> -->
      <p class="classroom mt-3 col-8 m-auto">{{descrition_text}}</p>
    
  </div>
</template>

<style lang="scss">
 img{
  width: 50%;
  
}
/*@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
 
    
    align-items: center;
  }
} */
$bg-classroom: #232323;
$text-color: #f0ed36;

.classroom {
  background: $bg-classroom;
  color: $text-color;
  text-align: center;
  font-size: 18px;
}
</style>
