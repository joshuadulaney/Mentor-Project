<template>
  <div>
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
        <h5><a href="https://classicdb.ch/?talent#0">Druid Talent Calculator</a></h5>
      <hr>
      <h1>Talent Calculator</h1>
      <h1>{{numPoints}}</h1>
      <h3>{{Tiers}}</h3>
        <div v-for="tier in tiers">
        <Tier 
          disabled=tier.disabled
          />
        </div>
      <!-- <p>
        <a href="https://classicdb.ch/?talent#0">Druid Talent Calculator</a>
      </p>
      <hr>
      <div class='TalentCalculator'>
          <div class='balance'>
            <table class="balanceTable">
              <tr><th>Balance tree</th></tr>
              <tr class="tree">
                <td>Improved Wrath</td>
                <td>Nature's Grasp</td>
                <td>Improved Nature's Grasp</td>
                <td></td>
              </tr>
              <tr class="tree">
                <td>Improved Entangling Roots</td>
                <td>Improved Moonfire</td>
                <td>Natural Weapons</td>
                <td>Natural Shapeshifter</td>
              </tr>          
              <tr class="tree">
                <td>Improved thorns</td>
                <td></td>
                <td>Omen of Clarity</td>
                <td>Nature's Reach</td>
              </tr>
              <tr class="tree">
                <td></td>
                <td>Vengeance</td>
                <td>Improved Starfire</td>
                <td></td>
              </tr>
              <tr class="tree">
                <td></td>
                <td>Nature's grace</td>
                <td>Moonglow</td>
                <td></td>
              </tr>
              <tr class="tree">
                <td></td>
                <td>Moonfury</td>
                <td></td>
                <td></td>
              </tr>
              <tr class="tree">
                <td></td>
                <td>Moonkin Form</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
      </div> -->
  </div>
</template>

<script>

import dummyTree from '../Tree.js'

export default {
  name: 'TalentCalculator',
  components:{
    
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
    numPoints: dummyTree.numPoints,
    Tiers: dummyTree.Tiers
  }
  }
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
