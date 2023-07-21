import "./App.css";
import { useReducer } from 'react'
 function App() { 
  const [number, setNumber] = useReducer(function(currentNumber,type){
    if (currentNumber ===5) {
      return 0
    }
    return currentNumber+1
  },0)
  return (<>
  <button onClick={()=>{ setNumber("+")}}>{number}</button>
   Hi, I'm Coder Shiyar </>);
}
 
export default App;

// كيفية إنشاء فاريبل من نوع يوز ريجوزر, وكيفية استخدامه
// -------------------------------------------
// React Tutorial – How to Use the useReducer 
// -------------------------------------------
// 1: import { useReducer } from 'react'
// 2: const [state, dispatch] = useReducer(reducerMethod, initialValue)







