<template>
  <li>
    <button>{{talent.name}}</button>
  </li>

</template>

<script>


export default {
  name: 'Talent',
  props: {
    talent: Object,
  },
}
</script>


<style>

</style>