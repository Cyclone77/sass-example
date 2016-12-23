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

