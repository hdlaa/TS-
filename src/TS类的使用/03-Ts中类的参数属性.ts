
class Person {
  
  height: number

  // 语法糖 构造函数的参数加上属性 就会创建一个同名成员变量 切不需要再赋值
  constructor(public name:string, public age:number,height:number){
    // this.name = name;

    // this.age = age;
    this.height = height
  }
}

export{}