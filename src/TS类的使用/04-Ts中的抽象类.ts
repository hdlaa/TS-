/**
 * ts 中的类  定义通用的接口的时候
 * 
 */
abstract class Shape {
  /**
   * getArea 方法只有声明没有实现体
   * 可以将 getArea 定义为一个抽象方法 
   * 抽象方法只能定义在一个抽象类中
   * 抽象类的抽象方法 子类必须实现 
   * 抽象类不能被实例化
   */
  abstract getArea()
}

class Rectangle extends Shape {
  constructor(public width:number,public height:number){
    super()
  }
  getArea() {
    return this.width * this.height
  }
}

class Cycle extends Shape {
  constructor(public r:number){
    super()
  }
  getArea() {
    return this.r * this.r * Math.PI
  }
}
function getArea(shape:Shape){
  return shape.getArea()
}

/**
 * 抽象类和接口的区别
 * 
 * 抽象类时对事物的抽象，抽象类用来捕捉子类通用的特性 接口用来描述一些行为
 * 
 * 抽象类通常用于一系列类之间 接口用来描述一个类应该具有什么行为
 * 
 * 接口可以被多层实现 类只能单一继承
 * 
 * 抽象类中可以有实现体 接口只能有函数的声明
 * 
 * 抽象类时对事物的抽象 表达的是 is a 的关系。猫是一种动物（动物就是抽象类）
 * 
 * 接口是对行为的抽象，表达的是 has a 的关系 猫拥有 跑 、 爬树 的行为
 */