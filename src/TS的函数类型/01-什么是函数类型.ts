function foo(arg :number):number{
  return 333
}

// foo 本身也是一个标识符 也应该有自己的类型
const bar:any =(arg:number):number => {
  return 123
}