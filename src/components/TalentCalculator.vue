<template>
  <div>
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
        <h5><a href="https://classicdb.ch/?talent#0">Druid Talent Calculator</a></h5>
      <hr>
      <h1>Talent Calculator</h1>
      <h1>{{pointsTotal}}</h1>
        <Tier v-for="tier in tree.tiers" :key="tier.order"
            :tier="tier"
        />
  </div>
</template>

<script>

import tree from '../Tree.js'
import Tier from './Tiers'

export default {
  name: 'TalentCalculator',
  components:{
    Tier: Tier,
  },
  props: {
    msg: String,
  },
  data: function () {
      return {
      tree: tree,
    }
  },
  computed:{
    pointsTotal: function (){
      let pointsTotal = 0
      for(let tier of this.tree.tiers){
        for(let talent of tier.talents){
          pointsTotal= talent.points + pointsTotal
        }
      }
      return pointsTotal
    }
  },
}


</script>


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
