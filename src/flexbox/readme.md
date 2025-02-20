flex基本概念

1.轴

主轴main axis
交叉轴 cross axis

2.容器

父容器 container

flex | justify-content | align-items | align-content

子容器 item

flex | align-self | order

一、容器

父容器

轴向

flex-direction: row | row-reverse | column | column-reverse

排列方式

flex-wrap: nowrap | wrap | wrap-reverse

父容器: justify-content 属性用于定义如何沿着主轴方向排列子容器。

1.位置排列

justify-content: flex-start | flex-end | center

2.分布排列

justify-content: space-between | space-around

父容器： align-items 属性用于定义如何沿着交叉轴方向分配子容器的间距。

1.位置排列

align-items: flex-start | flex-end | center

2.基线排列

align-items: baseline

3.拉伸排列

align-items: stretch

父容器：align-content

align-content: flex-start | flex-end | center | space-between | space-around | stretch（默认值）;

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

flex-flow: row nowrap;

二、子容器

flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

伸缩方式:

flex-basic | flex-grow | flex-shrink

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

交叉轴对齐方式 align-self:

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。


1.位置排列

align-self: flex-start | flex-end | center

2.基线排列

align-self: baseline

3.拉伸排列

align-self: stretch

主轴顺序
order

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
