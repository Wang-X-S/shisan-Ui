<template>
  <svg class="s-icon" aria-hidden="true" >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    props:['name']
  }
</script>

<style lang="scss">
.s-icon {
  width: 1em;
  height: 1em;
}
</style>