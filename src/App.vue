<script setup>
const title = "Welcome on Gessource"
</script>
<template>
<div>
  <header>
    <h1>{{title}}</h1>

  </header>
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
      <RouterView/>
</div>
</template>

<style lang=scss scope>
@import '@/assets/scss/custom.sass';
h1{
  text-align: center;
}
header{
  background-color: beige;
}

a, .home{
  @include custom-button
}


</style>
