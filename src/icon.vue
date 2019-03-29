<template>
  <svg class="w-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: ['name']
};
</script>
<style lang='scss'>
.w-icon {
  height: 1em;
  width: 1em;
}
</style>
