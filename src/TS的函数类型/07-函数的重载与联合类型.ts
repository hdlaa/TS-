
function getLength(arg){
  return arg.length;
}
/**
 * 使用的原则
 * 联合类型和重载都能实现的情况下 尽量用 联合类型
 */
//函数的重载实现
function getLengthByOverLoad(str:string):number
function getLengthByOverLoad(arr:any[]):number

function getLengthByOverLoad(params){
  return params.length
}

// 联合类型

function getLengthByLink(params: string| any[]){
  return params.length
}