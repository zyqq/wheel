---
title: Grid 网格
---
# Grid 网格 <Badge text="pass" type="success"/> <Badge text="0.0.3+"/>

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

```html
* {
  box-sizing: border-box;
}

<w-row class="demoRow">
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
</w-row>

<w-row class="demoRow">
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
</w-row>
```

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

```html
* {
  box-sizing: border-sbox;
}

<w-row class="demoRow" gutter="10">
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
</w-row>

<w-row class="demoRow" gutter="10">
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6">
    <div class="demoCol">6</div>
  </w-col>
</w-row>

```

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

```html
* {
  box-sizing: border-box;
}

<w-row class="demoRow" gutter="10">
  <w-col span="8">
    <div class="demoCol">8</div>
  </w-col>
  <w-col span="8" offset="8">
    <div class="demoCol">8</div>
  </w-col>
</w-row>
<w-row class="demoRow" gutter="10">
  <w-col span="6" offset="6">
    <div class="demoCol">6</div>
  </w-col>
  <w-col span="6" offset="6">
    <div class="demoCol">6</div>
  </w-col>
</w-row>
<w-row class="demoRow" gutter="10">
  <w-col span="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4" offset="4">
    <div class="demoCol">4</div>
  </w-col>
  <w-col span="4" offset="8">
    <div class="demoCol">4</div>
  </w-col>
</w-row>
<w-row class="demoRow" gutter="10">
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2">
    <div class="demoCol">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="demoCol">2</div>
  </w-col>
</w-row>
```

<row-attributes></row-attributes>
<col-attributes></col-attributes>