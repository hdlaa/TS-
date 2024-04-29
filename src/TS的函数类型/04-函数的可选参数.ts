
// y就是一个可选类型 
// 实际上 y 的类型时 number|undefined
function sum(x:number,y?:number){

}

sum(10)
sum(10,20)

// 函数的默认值
/**
 * 1、给了默认值的话 不用声明类型 通过类型推导
 * 2、有默认值的参数 可以传 undefined 或者不传
 * @param x 
 * @param y 
 * @returns 
 */
function del(x:number,y:number = 23){
  return x+y
}

del(10)

// 剩余参数的类型注解 

function foo2(...args:number[]){

}