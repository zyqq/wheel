<template>
  <div>    
    <div style="padding: 20px;">
      <w-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
        <w-slides-item name="1">
          <div class="box">1</div>
        </w-slides-item>
        <w-slides-item name="2">
          <div class="box">2</div>
        </w-slides-item>
        <w-slides-item name="3">
          <div class="box">3</div>
        </w-slides-item>
      </w-slides>
    </div>    
  </div>
</template>
<script>
  import WSlides from './slides/slides'
  import WSlidesItem from './slides/slides-item'

  export default {
    name: "demo",
    components: {
      WSlides,
      WSlidesItem
    },
    data () {
      return {
        selected: undefined
      };
    },
    methods: {
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style> 