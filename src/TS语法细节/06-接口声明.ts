// type 是以赋值的方式 定义一个类型
type PointType = {
  x:number,
  y:number,
  z:number,
}

// 接口： interface 接口是以声明的方式定义一个类型
// 接口的声明

interface PointType2 {
  x:number,
  y:number,
  z:number
}

// 大部分时候 interface 和 type 没区别
/**
 * 1、区别 type 的范围更广 type 可以声明基本数据类型 interface 只能声明对象
 * 2、interface 可以多次声明 type 不允许两个相同的别名存在
 * 3、接口支持集成
 * 4、interface 可以被类实现
 * 
 * 综上：声明一般的类型 用type 比较好 如果声明对象 用interface 比较好 
 */

interface PointType3 {
  x:number,
  y:number,
}

interface PointType3 {
  z:number
}

interface IPerson {
  name: string
  age: number
}

interface IKun extends IPerson {
  kouhao: string
}
