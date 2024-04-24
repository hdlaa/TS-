
// 定义一个ts函数是后，都要明确指定参数的类型 否则会默认any类型

// 返回值类型可以明确指定 也可以自动推导

// 普通函数最好添加类型注解 但是匿名函数最好不要添加类型注解  比如 forEach map 等函数的入参
function sum(num1:number,num2:number): number {
  return num1 + num2
}

