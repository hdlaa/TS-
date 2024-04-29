 /**
  * 函数中的默认this  
  * 
  * 默认的情况下 this类型时any
  * 
  * 不允许有模糊的this 时候 在该ts文件所在的文件夹下面执行 tsc --init 
  * 生成的tsconfig.json 文件夹下面把"noImplicitThis": true, 这样ts就会根据上下文推导出this
  * 
  * 如果没有推导出this 声明函数的时候要手动的指定第一个参数作为this  名词必须叫this
  * 
  * 后面传的参数才是给执行的函数传的参数
  */

 // 对象中的this
 const obj = {
  name:'why',
  studying: function(){
    console.log(this.name,"studying");
  }
 }

 obj.studying()

 function foo(){
  console.log(this);
 }

