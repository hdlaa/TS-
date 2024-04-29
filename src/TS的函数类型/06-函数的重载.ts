// 只能将两个数字 或者 两个字符串相加 

// ts函数的重载写法 
/**
 * 1、先编写重载签名 
 * 
 * 2、编写通用的函数实现
 * 
 * 3、有实现体的函数是没法没直接调用的
 */

function add(num1:number,num2:number):number
function add(str1:string,str2:number):string

function add(a:any,b:any):any{
  return a + b
}

add(12,23)
export{}
