import { useRef,useState } from "react";


function App() {
  let number1 = useRef()
  const [state, setstate] = useState();
  // let NumberInput = document.getElementById("NumberInput")
  function Add(){
    // console.log(document.getElementById("NumberInput").value)
    number1.current.value = 1 + Number(number1.current.value);
    // setstate(10)
  }
  console.log("تم تحديث المحتوى");
  return (
    <>
        <input id="NumberInput" type="number" ref={number1} />
        <button onClick={Add}>+</button>
    </>
  );
}

export default App;
