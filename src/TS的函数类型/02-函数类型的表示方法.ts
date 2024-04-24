// 方案 1 函数类型表达式 function type exprsssion

//  格式 ：(参数列表)=> 返回值
//  如果某个函数的参数时函数的时候  ts 对传入的函数类型的参数的入参的类型不做校验
//  ts 语法的报错 与否取决于 ts 认为你有没有错误 
//  ts 的目的实际上是给js 加入类型检测 并且让ts 更好用 实际上是在好用和类型检测中间找到一个平衡
//  《从语言设计的角度看问题 就可以高屋建瓴的看待问题》

// 方案2 

type FunType = (num1:number)=>number //注意：形参的类型不能省
const bar:(num1:number)=>number =(arg:number):number=>{
  return 123
}

const bar1:FunType = (arg:number):number=>{
  return 555
}
export {}