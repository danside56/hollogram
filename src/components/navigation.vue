<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="ui large menu">
      <router-link to="/" class="active item"> Accueil </router-link>
      <router-link to="/Register" class="item"> Register </router-link>
      <div class="right menu">
        <div class="item">
          <div class="ui primary button">S'inscrire</div>
        </div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui primary button">S'inscrire</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
