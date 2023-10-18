<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary col-6 m-auto">
  <div class="container-fluid">
  <router-link to="/">Home</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page"><RouterLink to="/newgame" >New game</RouterLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page"><RouterLink to="/loadgame" >Load game</RouterLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page"><RouterLink to="/settings" >Settings</RouterLink></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <router-view/>
  </div>
</template>
<style scope>
/* nav{
  display: grid;
  grid-template-columns: (4);
} */
.one{
  grid-column : 1;
  grid-row : 1
}

.two{
  grid-column : 2;
  grid-row : 1 
}

.three{
  grid-column : 1;
  grid-row : 2 
}
.four{
  grid-column : 2;
  grid-row : 2 
}
a {
  color: rgb(255, 255, 255); 
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 10px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%);
  box-shadow: rgba(0, 0, 0, 0) -100px -100px 0px 0px;
  border: 2px solid rgb(28, 110, 164);
  margin: 5px;
  }
/* a:hover {
background: #1C6EA4; }
a:active {
background: #144E75; } */
main{
  margin-top: 100px ;
}

</style>
