<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-cascader
          :source="source"
          popover-height="200px"
          :selected="selected"
          @update:selected="selected=$event"
        ></w-cascader>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import WCascader from '../../../src/cascader/cascader'
import WIcon from '../../../src/icon/icon'
import mixin from '../mixin'
export default {
  name: 'demo',
  mixins: [mixin],
  components: {
    WCascader,
    WIcon
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [
                {
                  name: "瑶海"
                },
                {
                  name: "庐阳"
                }
              ]
            }
          ]
        }
      ],
      codeStr: `
         <w-cascader
          :source="source"
          popover-height="200px"
          :selected="selected"
          @update:selected="selected=$event"
        ></w-cascader>

        data() {
          return {
            selected: [],
            source: [
              {
                name: "浙江",
                children: [
                  {
                    name: "杭州",
                    children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
                  },
                  {
                    name: "嘉兴",
                    children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
                  }
                ]
              },
              {
                name: "福建",
                children: [
                  {
                    name: "福州",
                    children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
                  }
                ]
              },
              {
                name: "安徽",
                children: [
                  {
                    name: "合肥",
                    children: [
                      {
                        name: "瑶海"
                      },
                      {
                        name: "庐阳"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    margin: 0 10px;
  }
  button {
    margin: 0 10px;
  }
}
</style>
