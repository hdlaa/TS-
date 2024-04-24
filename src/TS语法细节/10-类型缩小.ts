// 类型收窄 之后做 针对特定的类型做操作

/**
 * 类型缩小的使用
 *  1、typeof
 *  2、方向类型判断 比如对枚举类型的判断 === !==
 *  3、instansof 判断是不是 某个的实例
 *  4、 in 用于判断某个属性在不在 对象接口 或者对象type 上
 */

function printID(id:number | string){
  if(typeof id === 'string'){
    console.log(id.length)
  }
}

