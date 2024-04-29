// 方案 1 函数类型表达式 function type exprsssion

//  格式 ：(参数列表)=> 返回值
//  如果某个函数的参数时函数的时候  ts 对传入的函数类型的参数的入参的类型不做校验
//  ts 语法的报错 与否取决于 ts 认为你有没有错误 
//  ts 的目的实际上是给js 加入类型检测 并且让ts 更好用 实际上是在好用和类型检测中间找到一个平衡
//  《从语言设计的角度看问题 就可以高屋建瓴的看待问题》



type FunType = (num1:number)=>number //注意：形参的类型不能省
const bar:(num1:number)=>number =(arg:number):number=>{
  return 123
}

const bar1:FunType = (arg:number):number=>{
  return 555
}


// 方案2  函数的调用签名(从对象的角度看待这个函数，也可以有其他属性)
interface IBar {
  name:string
  age:number
  (num:number):number
}
const bar2:IBar =(num:number):number=>{
  return 987
}
bar2.name = 'adsad';
bar2.age = 18;

/**
 * 开发中如何选择呢 
 * 1、如果只是描述函数本身 就用函数类型表达式
 * 2、如果描述函数作为对象可以被调用，同时有其他属性时候，使用函数调用签名
 */
export {}