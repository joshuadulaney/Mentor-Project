<template>
  <div>
    <h1>Talent Calculator</h1>
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
            <a href="https://classicdb.ch/?talent#0">Druid Talent Calculator</a>
          </li>
        </ul>
      </p>
      <hr>
  </div>
</template>

<script>

export default {
  name: 'TalentCalculator',
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
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>