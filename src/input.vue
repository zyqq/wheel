<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>

</template>
<script>
import Icon from './icon.vue'

export default {
  name: 'WheelInput',
  components: {
    Icon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #F1435D;
  .wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;     
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      height: $height;
      border: 1px solid $border-color;
      font-size: inherit;
      border-radius: $border-radius;
      padding: 0 8px;

      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly]  {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
      .icon-error{
        fill: $red;
      }
      .error-message {
        color: $red;
      }
    }
  }
</style>