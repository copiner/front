布局的传统解决方案，基于盒状模型，
依赖 display 属性 + position属性 + float属性




### flex container

#### main 、 cross
```
flex-direction: row | row-reverse | column | column-reverse;

flex-wrap: nowrap | wrap | wrap-reverse;

flex-flow: <flex-direction> || <flex-wrap>; default:row nowrap

justify-content: flex-start | flex-end | center | space-between | space-around;

align-items: flex-start | flex-end | center | baseline | stretch;

align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

### flex item:
```
order: <integer>; default 0;

flex-grow:<number>; default 0;

flex-shrink:<number>; default 1;

flex-basics:<length> | auto; default auto;

flex:<'flex-grow'> <'flex-shrink'> <flex-basis>; default: 0 1 auto;

align-self: auto | flex-start | flex-end | center | baseline | stretch;

```