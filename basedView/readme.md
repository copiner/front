## CSS3动画

animation

```
@keyframes 规则
```

### 属性
```
animation:  所有动画属性的简写属性，除了 animation-play-state 属性
```

```
animation-name:  @keyframes 动画的名称。
animation-duration: 动画完成一个周期所花费的秒或毫秒。默认是 0。
animation-timing-function: 动画的速度曲线。默认是 "ease"。
animation-delay: 动画何时开始。默认是 0。
animation-iteration-count: 动画被播放的次数。默认是 1。
animation-direction: 动画是否在下一周期逆向地播放。默认是 "normal"。
animation-play-state: 动画是否正在运行或暂停。默认是 "running"。
animation-fill-mode: 对象动画时间之外的状态。
```

## CSS3过渡

transition

### 属性

```
transition: 简写属性，用于在一个属性中设置四个过渡属性。
```

```
transition-property: 应用过渡的 CSS 属性的名称
transition-duration: 过渡效果花费的时间。默认是 0。
transition-timing-function: 过渡效果的时间曲线。默认是 "ease"。
transition-delay: 过渡效果何时开始。默认是 0。
```

## CSS3 2D 转换

Transform

### 属性
```
transform: 向元素应用 2D 或 3D 转换。
transform-origin: 允许你改变被转换元素的位置。
```

### 2D Transform 方法

```
matrix(n,n,n,n,n,n) : 2D 转换，使用六个值的矩阵。
translate(x,y) : 2D 转换，沿着 X 和 Y 轴移动元素。
translateX(n) : 2D 转换，沿着 X 轴移动元素。
translateY(n) : 2D 转换，沿着 Y 轴移动元素。
scale(x,y) : 2D 缩放转换，改变元素的宽度和高度。
scaleX(n) : 2D 缩放转换，改变元素的宽度。
scaleY(n)	: 2D 缩放转换，改变元素的高度。
rotate(angle) : 2D 旋转，在参数中规定角度。
skew(x-angle,y-angle) : 2D 倾斜转换，沿着 X 和 Y 轴。
skewX(angle) : 2D 倾斜转换，沿着 X 轴。
skewY(angle) : 2D 倾斜转换，沿着 Y 轴。
```

## CSS3 3D 转换

### 属性
```
transform : 向元素应用 2D 或 3D 转换。
transform-origin : 允许你改变被转换元素的位置。
transform-style : 被嵌套元素如何在 3D 空间中显示。
perspective :  3D 元素的透视效果。
perspective-origin : 3D 元素的底部位置。
backface-visibility : 定义元素在不面对屏幕时是否可见。
```

### 3D Transform 方法

```
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) :  3D 转换，使用 16 个值的 4x4 矩阵。
translate3d(x,y,z) : 3D 转化。
translateX(x) : 3D 转化，仅使用用于 X 轴的值。
translateY(y) : 3D 转化，仅使用用于 Y 轴的值。
translateZ(z) : 3D 转化，仅使用用于 Z 轴的值。
scale3d(x,y,z) : 3D 缩放转换。
scaleX(x) : 3D 缩放转换，通过给定一个 X 轴的值。
scaleY(y) : 3D 缩放转换，通过给定一个 Y 轴的值。
scaleZ(z) : 3D 缩放转换，通过给定一个 Z 轴的值。
rotate3d(x,y,z,angle) : 3D 旋转。
rotateX(angle) : 沿 X 轴的 3D 旋转。
rotateY(angle) : 沿 Y 轴的 3D 旋转。
rotateZ(angle) : 沿 Z 轴的 3D 旋转。
perspective(n) : 3D 转换元素的透视视图。
```
