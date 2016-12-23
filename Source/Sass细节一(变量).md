> 用**sass --watch**命令的时候当前目录名不能为中文，否则会报错！

## 变量

### 局部变量和全局变量的定义

Sass的变量是用$申明的，有局部变量（选择器内部的变量）和全局变量（不在任何选择器内的变量）。例如：
``` scss
//这里$width就是全局变量
$width: 5em;
#mian{
    width: $width;
}

#sidebar {
    $height: 4em;
    height: $height;
}
/**
#sidebar-nav{
    height: $height; //这里编译的时候会报错，找不到全局变量$height
}
**/
```

<!--more-->

**当然在选择器内部也可以定义全局变量**，例如：
``` scss
#selection{
    $width: 5em !global; //!global这里$width就定位为全局变量了。
    width: $width;
}
#selection-list{
    width: $width;
}
```

### 默认变量定义

Sass提供默认变量,根据需求来覆盖默认值，如下：
``` scss
$baseLineHeight:        2;
$baseLineHeight:        1.5 !default; //这里!default定义$baseLineHeight变量为默认变量
body{
    line-height: $baseLineHeight; 
}
```
编译后为：
``` css
body {
    line-height: 2;
}
```
现在假设我们有个scss文件，代码如下([例子来源](http://www.w3cplus.com/preprocessor/sass-basic-variable.html))：
``` scss
//文件_imgstyle.scss的内容：
// 变量
//---------------------------------
$imgStyleBorder:         1px solid #ccc !default;
$imgStylePadding:        2px !default;
$imgStyleRadius:         8px !default;

// mixin
//---------------------------------
@mixin img-border($border:$imgStyleBorder,$padding:$imgStylePadding){
    border: $border;
    padding: $padding;
}

@mixin img-rounded($radius:$imgStyleRadius){
    border-radius:$radius;  
}

//样式
//---------------------------------
.img-border{
    @include img-border;
}

.img-rounded{
    @include img-rounded;
}

//文件style.scss内容：

//导入_imgstyle.scss
@import 'imgstyle';
```
以上如果我们要改padding的值为5px，有以下方法：

方法一：重新覆写
``` scss
//导入_imgstyle.scss
@import 'imgstyle';

.img-border{
    padding:5px;
}
```
解析后的css：
``` css
.img-border {
  border: 1px solid #cccccc;
  padding: 2px;
}
.img-rounded {
  border-radius: 8px;
}
.img-border {
  padding: 5px;
}
```
方法二：改变@include的参数
``` scss
//导入_imgstyle.scss
@import 'imgstyle';

.img-border{
    @include img-border($imgStyleBorder,5px);
}
```
解析后：
``` css
.img-border {
  border: 1px solid #cccccc;
  padding: 2px;
}
.img-rounded {
  border-radius: 8px;
}

.img-border {
  border: 1px solid #cccccc;
  padding: 5px;
}
```
很明显，重复代码过多，在

变量特殊使用_imgstyle.scss文件中生命变量用了!default默认值，充分利用它的有点，改写style.scss，如下：
``` scss
//申明$imgStylePadding为5px
$imgStylePadding:  5px;

//导入_imgstyle.scss
@import 'imgstyle';
```
解析后为：
``` css
.img-border {
  border: 1px solid #cccccc;
  padding: 5px;
}

.img-rounded {
  border-radius: 8px;
}
```

> **如果变量需要镶嵌在字符串之中，以不带引号的字符串的方式出现，就必须需要写在"#{}"之中。**

``` scss
$position: left;

.aside{
    margin-#{$position}: 30em;
}
```
编译后则是：
``` css
.aside {
    margin-left: 30em;
}
```

### 变量的特殊规定

> **Sass变量中带了下划线：'-'， '_'为同一个变量**，例如：

``` scss
$main-width: 4em;
#main-bard{
    width: $main_width; //正确，反之亦然。
}
```

### 多值变量
多值变量可用list和map遍历，多值变量想js中的数组和json。

#### list (列表)
list列表可以用空格，逗号，括号隔开。
- nth 函数可以直接访问列表中的某一项；
- join 函数可以将多个列表拼接在一起；
- append 函数可以将某项添加到列表中；
- @each 指令可以将添加样式到列表中的每一项。

``` scss
$linkColor:#08c #333 !default;
a {
    color: nth($linkColor, 1);
    &:hover {
        color: nth($linkColor, 2);
    }
}

$classNav: nav-bar,nav-list,nav-item;
@each $item in $classNav {
    .#{$item} {
        display: inline-block;
    }
}
```
编译后则是：
``` css
a {
    color: #08c;
}

a:hover {
    color: #333;
}

.nav-bar {
    display: inline-block;
}

.nav-list {
    display: inline-block;
}

.nav-item {
    display: inline-block;
}
```
#### map (集合)
map集合数据就是以键值对的方式出现，值可以是list。
格式为：$map: (key1: value1, key2: value2, key3: value3);。
``` scss
$headings: (h1: 2em 3em, h2: 1.5em 2em, h3: 1.2em 1.5em);
@each $header,$size in $headings {
    #{$header} {
        font-size: nth($size, 1);
        height: nth($size, 2);
    }
}
```

编译后为：
``` css
h1 {
    font-size: 2em;
    height: 3em;
}

h2 {
    font-size: 1.5em;
    height: 2em;
}

h3 {
    font-size: 1.2em;
    height: 1.5em;
}
```