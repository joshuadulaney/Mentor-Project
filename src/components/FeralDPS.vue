<template>
  <div>
    <h1>Feral DPS Page</h1>
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
            <a href="https://forum.elysium-project.org/topic/52588-a-grizzly-situation-feral-druid-1121-pve-tanking-and-dps-by-elicas-of-crestfall/">A Grizzly Situation - Feral Druid 1.12.1 (PvE, tanking and DPS) [by Elicas of Crestfall]</a><br>
          </li>
        </ul>
      </p>
      <hr>
        <iframe width="800" height="450" src="https://www.youtube.com/embed/P2t7qG9SrVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
        <iframe width="800" height="450" src="https://www.youtube.com/embed/hUc70zMFAKI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>

export default {
  name: 'FeralDPS',
  components:{
    
  },
  props: {
    msg: String,
  }
};
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