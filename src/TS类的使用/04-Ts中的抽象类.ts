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