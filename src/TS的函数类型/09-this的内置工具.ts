
function foo(this:{name:'hdl'},info:{name:srting}){
  console.log(this,info);
}

type FooType = typeof foo

export { }