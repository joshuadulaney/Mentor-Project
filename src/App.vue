<template>
  <div id="app"> <!-- ctrl + c to stop hosting the server -->
    <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import Tanking from './components/Tanking';

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
