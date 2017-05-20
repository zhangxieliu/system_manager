<template>
  <div class="bg">
    <section>
      <h3>{{title}}</h3>
      <div class="divider-line"></div>
    </section>
  </div>
</template>
<style>
  .bg {
    background-color: ghostwhite;
  }

  .divider-line {
    height: 1px;
    width: 100%;
    background-color: gainsboro;
  }
</style>
<script>
  export default {
    props: ['title'],
    data() {
      return {};
    }
  }
</script>
