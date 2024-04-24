// 方案 1 函数类型表达式 function type exprsssion
//  格式 ：(参数列表)=> 返回值

type FunType = (num1:number)=>number //注意：形参的类型不能省
const bar:(num1:number)=>number =(arg:number):number=>{
  return 123
}

const bar1:FunType = (arg:number):number=>{
  return 555
}
export {}