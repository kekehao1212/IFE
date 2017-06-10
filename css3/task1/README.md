## Markdown语法使用和css3 Task1
####1. css属性
- linear-gradient

    用默认的渐变方向绘制一个最简单的线性渐变
  ``` css
    linear-gradient(to bottom, #fff 0%, #333 100%）

    -webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 50%,#0ff 70%, #f00);
  ```
- color:  transparent

    transparent属性可以使用到任何color属性上表示透明色
- -webkit-background-clip

    background-clip表示背景绘制区域，在webkit内核浏览器中，存在
    ``` css
    -webkit-background-clip: text
    ```
    表示只对文字进行背景绘制
- 背景循环绘制思想

    采用多倍背景首尾相接进行循环播放
