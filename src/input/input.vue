<template>
  <div class="wrapper" :class="{error}">
    <input ref="input" :value="value" type="text" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>

</template>
<script>
import Icon from '../icon/icon.vue'

export default {
  name: 'WheelInput',
  components: {
    Icon
  },
  props: {
    value: {
      type: [String, Date],
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
  },
  methods: {
    setRawValue(value) {
      this.$refs.input.value = value
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_var.scss';
  .wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size-small;     
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