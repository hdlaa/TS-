interface IPerson {
  name:string,
  age:number,
  height:number,
  address:string
}


// 映射类型不能用 interface
/**
 * 一个类型基于另外一个类型 又不想拷贝 可以用映射类型
 * 大部分的内置工具使用映射类型实现
 * 大部分的类型体操题目也是用映射类型完成的
 * 
 * 映射类型就是使用了PropertyKeys 联合类型的泛型
 * 其中PropertyKeys 一般由 keyof 创建 然后循环遍历键名创建出来的一个类型
 */
type MapPerson<T> = {
  // 索引签名
  /**
   * 索引签名依次使用的一次
   */
  [Perproty in keyof T]: T[Perproty]
}


/**
 * 映射类型的修饰符
 *  readonly   ?
 * 
 *  可以在修饰符上面添加 + - 符号 表示添加 删除该修饰符（该情况用于对源类型 如果有readonly ? 的修改  ）
 */

type MapPerson1<T> = {
  readonly [Property in keyof T]: T[Property]
}

type MapPerson2 <T> = {
  [Property in keyof T]?: T[Property] 
}

type Person1 = MapPerson<IPerson>
type Person2 = MapPerson2<IPerson>
export {}