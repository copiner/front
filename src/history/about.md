因为要做关闭页面退出功能，但页面跳转和刷新时并不做退出事件，需要甄别刷新和关闭

不同的浏览器刷新和关闭时对onbeforeunload()和onunload()的执行步骤是不同的

ie、chrome：
页面加载时执行unload()；
刷新时先执行onbeforeload()，新页面即将替换旧页面时onunload()，最后unload();
关闭时执行onbeforeload()，再执行onunload().

firefox:
刷新时只执行onunload();
关闭时只执行onbeforeunload().


首先判断浏览器的类型，简便可用navigator.userAgent获取浏览器的字符串，与浏览器类型做查找即可。
目前对Chrome和firfox区分关闭和刷新成功。
浏览器为firfox时flag为false，Chrome为true。


```javascript
window.onload = function(){

  window.onunload = function() {
    if(flag){
      console.log('关闭操作');
    } else {
      console.log('刷新操作');
    }
  };

  window.onbeforeunload = function () {
    if(!flag){
      console.log('关闭操作');
    } else{
      console.log('刷新操作');
    }
  };
}
```

### jquery源码 $.load()实现
