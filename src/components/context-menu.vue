<template>
  <div class='context-menu' data-test="context-menu">
    <ul>
      <li class="menu-item"><a>From</a></li>
      <li class="menu-item"><a>To</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu'
}
</script>

<style scoped>
.context-menu {
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  -moz-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.6);
  font-family: Arial;
  left: 0;
  position: absolute;
  top: 0;
  width: 160px;
  display: none;
}

.menu-item {
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  width: 100%;
}

.menu-item:hover {
  background: #fafafa;
}

li:first-of-type {
  border-radius: 4px 4px 0 0;
}

li:last-of-type {
  border-radius: 0 0 4px 4px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
 }
</style>
