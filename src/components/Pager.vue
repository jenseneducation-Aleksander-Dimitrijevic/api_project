<template>
  <ul class="pagination">
    <li></li>
  </ul>
</template>

<script>
export default {
  name: "Pager"
};
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  margin: 2rem auto;

  button {
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: transparent;
  }
}
</style>