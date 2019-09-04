<template>
  <div>
      <h1>Tier {{tier.order}}</h1>
      <ol>
        <Talent v-for="talent in tier.talents" :key="talent.name"
          :talent="talent"
        />
      </ol>
  </div>
</template>

<script>

import Talent from './Talent'

export default {
  name: 'Tier',
  components:{
    Talent: Talent,
  },
  props: {
    tier: Object,
  },
}
</script>


<style>

</style>