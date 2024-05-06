interface IKun {
  name:string,
  age:number
}

type KeyIkun = keyof IKun // name | age

function getObjectProperty<O,K extends keyof O>(obj:O,key:K){
  return obj[key]
}

const info = {
  name:'aaa',
  age:'89',
  hobby:"篮球"
}

getObjectProperty(info,'hahahh')
getObjectProperty(info,'age')