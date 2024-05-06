

class Point<T = number,Y = string>{
  x:T
  y:Y

  constructor(x:T,y:Y){
    this.x = x;
    this.y = y
  }
}

const point1 = new Point(12,36)

class Point1<Type1,Type2> {
  constructor(public aaa:Type1,public bbb:Type2){}
}
