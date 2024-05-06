
// 泛型接口的使用 并且可以给默认类型
interface Ikun<Type = string>{
  slogen:Type,
  name:number,
  hobuy:Type
}

const ikun1:Ikun<number>={
  slogen:123,
  name:456,
  hobuy:789
}

const ikun2:Ikun<boolean>={
  slogen:true,
  name: 789,
  hobuy: false
}

const ikun3:Ikun = {
  slogen:"adsada",
  name:99,
  hobuy:'asdsada'
}