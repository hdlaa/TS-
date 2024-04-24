
type newType = number | string // 没有意义 相当于 never

interface IKun {
  name: string,
  age: number,
  kouhao: string
}

interface HuaHua {
  name: string,
  age: number,
  zuofa: ()=>{}
}

type ManyFen = IKun & HuaHua