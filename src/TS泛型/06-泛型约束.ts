
interface Ilength  {
  length:number
}
function getLength(arg:Ilength){
 return arg.length
}

getLength('aaaa');
getLength([1,2,3]);
getLength({length:3})

// 获取传入的内容 内容必须有length 属性 这样写的话经过了getInfo 函数后返回值的类型已经变了
// function getInfo(args:Ilength){
//   return args
// }

function getInfo<T extends Ilength>(args:T):T{
  return args
}

getInfo('aaa');
getInfo([1,2,3]);
getInfo({length:12})
getInfo(123)