## Markdown语法使用和css3 Task1
###1. css属性
 -  linear-gradient
   	
	用默认的渐变方向绘制一个最简单的线性渐变
  ``` css
 	backgrou: linear-gradient(to bottom, #fff 0%, #333 100%）

	background :-webkit-linear-gradient(left,#f00,#ff0 25%,#0f0 50%,#0ff 70%, #f00);
  ```
 - color:  transparent

	transparent属性可以使用到任何color属性上，来表示透明色
 - -webkit-background-clip	

	background-clip表示背景绘制区域，在webkit内核浏览器中，存在
	``` css
	-webkit-background-clip: text
	```
	表示只对文字进行背景绘制
	
 - 背景循环绘制思想

	采用多倍背景首尾相接进行循环播放  
	
###2. ::before和::after使用方法

#####注意事项

 - ::before和::after必须添加content属性，否则无法使用
 - ::before和::after的display属性默认为: inline，使用时考虑是否修改为block

###3. 不足之处
网页布局使用flex布局，利用position设置图片和文字重叠，该效果在Google浏览器可以实现，但是在360浏览器无法实现，不知什么原因。。。。。

　　