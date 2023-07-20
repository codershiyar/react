// import { Component } from 'react';
// import './App.css';
// import {Main1,Main2} from './Main'

// function HeaderSection1(){
//   return <header>Header Section 1</header>
// }
// class HeaderSection2 extends Component{
//   render(){
//     return <header>Header Section 2</header>
//   }
// }
// function App() {
//   return (
//     <>
//     <HeaderSection1/>
//     <HeaderSection2/>
//     <Main1/>
//     <Main2/>

//     <div className="App">
//       My App تطبيقي
//     </div>
//     </>
//   );
// }

// export default App;


// import { useState, useEffect} from "react";
// function App(props) {
//   const [count,setCount] = useState(0);
//   function Plus1(){ setCount(count+1);  }
//   useEffect(()=>{ document.title = count; },[count])
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={Plus1}>+</button>
//     </>
//   );
// }








// نقاط المهمة
// import { useState, useEffect} from "react";

// let counter = 0;
// function App() {
//  const [count,setCount] = useState(0);
//   function Plus1(){ 
//     counter+=1;
//     setCount(count+1);  
//   }
//   useEffect(()=>{ 
//     document.title = count;
//     console.log(counter)
//    },[count]);
//   console.log("تم تحديث الصفحة")
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={Plus1}>+</button>
//     </>
//   );
// }

// export default App;



// React UseRef
// import { useRef,useState } from "react";


// function App() {
//   let number1 = useRef()
//   const [state, setstate] = useState();
//   // let NumberInput = document.getElementById("NumberInput")
//   function Add(){
//     // console.log(document.getElementById("NumberInput").value)
//     number1.current.value = 1 + Number(number1.current.value);
//     // setstate(10)
//   }
//   console.log("تم تحديث المحتوى");
//   return (
//     <>
//         <input id="NumberInput" type="number" ref={number1} />
//         <button onClick={Add}>+</button>
//     </>
//   );
// }

// export default App;