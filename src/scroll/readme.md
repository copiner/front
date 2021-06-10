
### DTD已声明   动手试一试，判断是否有误
IE

document.documentElement.scrollHeight 浏览器所有内容高度 ,document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 浏览器滚动部分高度，document.body.scrollTop 始终为0
document.documentElement.clientHeight 浏览器可视部分高度，document.body.clientHeight 浏览器所有内容高度

FF

document.documentElement.scrollHeight 浏览器所有内容高度 ,document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 浏览器滚动部分高度，document.body.scrollTop 始终为0
document.documentElement.clientHeight 浏览器可视部分高度，document.body.clientHeight 浏览器所有内容高度

Chrome

document.documentElement.scrollHeight 浏览器所有内容高度， document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 始终为0，document.body.scrollTop 浏览器滚动部分高度
document.documentElement.clientHeight 浏览器可视部分高度，document.body.clientHeight 浏览器所有内容高度

DTD未声明

IE

document.documentElement.scrollHeight 浏览器可视部分高度，document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 始终为0，document.body.scrollTop 浏览器滚动部分高度
document.documentElement.clientHeight 始终为0，document.body.clientHeight 浏览器可视部分高度

FF

document.documentElement.scrollHeight 浏览器可视部分高度, document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 始终为0，document.body.scrollTop 浏览器滚动部分高度
document.documentElement.clientHeight 浏览器所有内容高度，document.body.clientHeight 浏览器可视部分高度

Chrome

document.documentElement.scrollHeight 浏览器可视部分高度,document.body.scrollHeight 浏览器所有内容高度
document.documentElement.scrollTop 始终为0，document.body.scrollTop 浏览器滚动部分高度
document.documentElement.clientHeight 浏览器所有内容高度，document.body.clientHeight 浏览器可视部分高度

浏览器所有内容高度即浏览器整个框架的高度，包括滚动条卷去部分+可视部分+底部隐藏部分的高度总和

浏览器滚动部分高度即滚动条卷去部分高度即可视顶端距离整个对象顶端的高度。

综上

1、document.documentElement.scrollTop和document.body.scrollTop始终有一个为0，所以可以用这两个的和来求scrollTop

2、scrollHeight、clientHeight 在DTD已声明的情况下用documentElement，未声明的情况下用body

这里之前有误， document.compatMode 可以用来判断是否声明了DTD， 值为”BackCompat”：未声明，值为”CSS1Compat”：已声明。

所以，判断滚动条是否已拉到页面最底部，可以用如下代码
```
window.onscroll  = function (){
    var marginBot = 0;
    if (document.compatMode === "CSS1Compat"){
        marginBot = document.documentElement.scrollHeight - (document.documentElement.scrollTop+document.body.scrollTop)-  document.documentElement.clientHeight;
    } else {
        marginBot = document.body.scrollHeight - document.body.scrollTop -  document.body.clientHeight;
    }
    if(marginBot<=0) {
        //do something
    }
}
```

### 其他 BOM DOM

pageYOffset是scrollTop的一个别名是 window的只读属性

window.innerHeight属于BOM（浏览器对象模型），而document.documentElement.clientHeight属于文档对象模型
