### 最佳实践
为了布局上的方便，建议将所有的元素都设置为box-sizing: border-box


如果不考虑低版本浏览器的话，可以用下面的代码
```css

*,
*:before,
*:after {
  box-sizing: border-box;
}
```

或者用的继承的方法，如下
```css

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```
