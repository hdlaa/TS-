// 元组 useState 函数
function useState<Type>(initialState:Type):[Type,(newValue:Type)=>void]{
  let state = initialState;
  function setState(newValue){
    state = newValue;
  }
  return [state,setState]
}

// 初始化count 
const [conut,setCount] = useState<number>(111)