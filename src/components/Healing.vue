<template>
  <div>
    <h1>Healing Page</h1>
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
            <a href="https://www.reddit.com/r/lightshope/comments/83g8u5/help_me_not_suck_as_a_resto_druid_pve/">Help me not suck as a resto druid (PvE)</a><br>
            <a href="https://www.warcrafttavern.com/guides/restro-druid-pre-raid-gear-guide-for-wow-classic/">Pre-BIS Gear List & Stat Priority</a><br>
          </li>
        </ul>
      </p>
      <hr>
      <h2> Videos </h2>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/tUKGYhkNSHk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
  </div>
</template>

<script>

export default {
  name: 'Healing',
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