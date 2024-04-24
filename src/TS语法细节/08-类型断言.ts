//使用类型断言 断言只能断言成更加具体的类型 或者不太具体的类型

const myEl = document.getElementById('my-img') as HTMLAnchorElement

type age = number 

const age:number = 18;

const  age3 = age as any


// 非空类型断言  对象类型 确定某个属性一定有值的时候使用

// 定义接口
