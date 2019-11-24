<template>
  <div class='context-menu' data-test="context-menu">
    <ul>
      <li class="menu-item" data-test="route-to" @click='emitMarked'>Route to</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  methods: {
    emitMarked () {
      this.$emit('marked')
    }
  }
}
</script>

<style scoped>
.context-menu {
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  -moz-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  left: 0;
  position: absolute;
  top: 0;
  width: 160px;
  display: none;
}

.menu-item {
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  width: 100%;
}

.menu-item:hover {
  background: #3FB1CE;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
 }
</style>
