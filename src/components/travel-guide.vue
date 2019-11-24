<template>
  <div id="guide">
    <ul>
      <li>Distance: {{distance}}m</li>
      <li>Duration: {{duration}}s</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TravelGuide',
  props: {
    travelData: {
      type: Object,
      default () {
        return {
          distance: 0,
          duration: 0
        }
      }
    }
  },
  computed: {
    distance () { return this.travelData.distance },
    duration () { return this.travelData.duration }
  }
}
</script>

<style scoped>
#guide {
  background: #fff;
  left: 10px;
  position: absolute;
  top: 10px;
  display: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
 }

 li {
   box-sizing: border-box;
   padding: 10px;
 }
</style>
