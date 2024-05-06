// 定义枚举类型

/**
 * 枚举类型的默认值是数字
 * 0 1 开始
 */

enum Direction {
  UP = 'UP',
  DOWN = 11,
  LEFT,
  RIGHT
}


enum Operation {
  Read = 1<<0,
  Write = 1<<1,
  Foo = 1<<2
}
const d1:Direction = Direction.UP