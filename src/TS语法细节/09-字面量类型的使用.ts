
const Iname:'hdl' = "hdl";

// 将多个字面量 联合起来 

type Direction = 'left'|'rigit'|'up'

type MethodType = 'get' | 'post'
function request(url:string,method:MethodType){}

const info = {
  url: 'XXXXX',
  method: 'post'
}
// 会报错 对于info 而言 method 属性是string
// request(info.url,info.method)

// 解决方式 1 使用类型断言
request(info.url,info.method as 'post')

// 方式2 让info 变为一个字面量

const info1:{
  url:string,
  method: 'post'
} = {
  url:'SSDD',
  method:'post'
}

// 方式 3 将info 断言成一个字面量  字面量推理
const info2 = {
  url: 'XXXXX',
  method: 'post'
} as const

request(info2.url,info2.method)

