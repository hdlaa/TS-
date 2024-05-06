// 1、函数的形参 实参就是一种参数化 但是这种参数化的类型时固定的

function foo(name:string,age:number){

}

foo('hdl',12)

// 定义一个函数 返回传入的内容
// number / string / {name:string}
function bar<Type>(arg: Type): Type{
  return arg
}

// 完整写法
bar<number>(123);
bar<string>('aaa');
bar<{name:string}>({name:'hdl'})

// 省略的写法

const res = bar(123)
let res1 = bar('asda')