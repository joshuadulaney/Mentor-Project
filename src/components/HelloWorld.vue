<template>
  <div>
    <div class="Leveling-banner"> </div>
    <h1>Classic Druid Class Page</h1>
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
            <iframe width="800" height="450" src="https://www.youtube.com/embed/UNHSOBkCYBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>

          </li>
        </ul>
      </p>
      <hr>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
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
.Leveling-banner {
  background: url(https://bnetcmsus-a.akamaihd.net/cms/template_resource/RAVO061FQRBO1556236141697.jpg);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:100vh;
  height: 40vh;
  background-size: cover;
}
</style>
