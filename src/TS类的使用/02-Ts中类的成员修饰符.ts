class Person {
  _name:string
  age:number

  // public  private :只有在类里面才能访问 私有属性 protected: 只有类和子类中才能访问
  // readonly 只读属性的修饰符
  constructor(name:string,age:number){
    this._name = name;
    this.age = age;
  }

  // getter setter 对属性的访问进行拦截

  set name(newValue:string){
    this._name = newValue
  }
  get name(){
    return this._name
  }
}

// 类和实例之间的关系 重要
 const p = new Person('hdl',18)