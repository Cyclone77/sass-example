> 用**sass --watch**命令的时候当前目录名不能为中文，否则会报错！

## 变量
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
> **Sass变量中带了下划线：'-'， '_'为同一个变量**，例如：

``` scss
$main-width: 4em;
#main-bard{
    width: $main_width; //正确，反之亦然。
}
```

## 数据类型
数据类型有7种：
- 数字：1.2, 13, 10px
- 字符串（带引号和不带引号）：foo", 'bar', baz
- 颜色：blue, #04a3f9, rgba(255, 0, 0, 0.5)
- 布尔值：true, false
- 空值：null
- 值列表 (list)，用空格或逗号分隔： 1.5em 1em 0 2em, Helvetica, Arial, sans-serif
- maps，从一个值映射到另一个（类似JSON）：(key1: value1, key2: value2)

<!--more-->

### 字符串
字符串变量在编译的时候会保持数据类型，但是如果变量用在字符串中，例如：

> **如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。**

``` scss
$position: left;

.aside{
    margin-#{$position}: 30em;
}
```
> **这样使用变量会把此变量编译成不带引号的字符串！**

