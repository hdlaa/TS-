// 不能用箭头函数 箭头函数没有原型 不能用new 调用
const foo = function (){

}

class Person {
  
}
// 函数构造签名 类型的使用  封装时用的比较多
interface IctoPerson {
  new(): Person
}

// 工厂模式
function factory(fn:IctoPerson){
  return new fn()
}