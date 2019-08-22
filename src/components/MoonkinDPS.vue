<template>
  <div>
    <h1>Moonkin DPS Page</h1>
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
            <a href="https://rankedboost.com/world-of-warcraft/classic-balance-druid-build/">Classic Balance Druid Build</a><br>
            <a href="https://forum.nostalrius.org/viewtopic.php?f=41&t=36638">Pre-BIS Gear List</a>
          </li>
        </ul>
      </p>
      <hr>
      <h2> Videos </h2>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/mrIEad1mbf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/RevirDl5oAU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>

export default {
  name: 'MoonkinDPS',
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