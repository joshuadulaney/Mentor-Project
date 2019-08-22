<template>
  <div>
    <h1>Tanking Page</h1>
    <h1>{{msg}}</h1>
        <h2>
            <ol>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tanking">Tanking</router-link></li>
            <li><router-link to="/feraldps">Feral DPS</router-link></li>
            <li><router-link to="/moonkindps">Moonkin DPS</router-link></li>
            <li><router-link to="/healing">Healing</router-link></li>
            <li><router-link to="/talentcalculator">Talent Calculator</router-link></li>
            </ol>
        </h2>
    <h2>Resources</h2>
      <p>
        <ul>
          <li>
            <a href="https://www.warcrafttavern.com/guides/taladrils-treatise-on-druid-tanking-in-vanilla/">Teladril's Druid Tanking Guide</a><br>
            <a href="https://forum.elysium-project.org/topic/52588-a-grizzly-situation-feral-druid-1121-pve-tanking-and-dps-by-elicas-of-crestfall/">A Grizzly Situation - Feral Druid 1.12.1 (PvE, tanking and DPS) [by Elicas of Crestfall]</a><br>
          </li>
        </ul>
      </p>
      <hr>
      <h2>Videos</h2>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/mNGo5SMeqgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/bKLxwOjIMc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>


export default {
  name: 'Tanking',
  components:{
    
  },
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  color: black;
  list-style-type: circle;
  text-align: left;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>