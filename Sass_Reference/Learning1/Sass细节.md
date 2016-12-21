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