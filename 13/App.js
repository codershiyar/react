import { useRef, useState } from "react";

 
 function App() {
  let emailInput = useRef()
  let [email,setEmail ] = useState()
  let [password,setPassword ] = useState()
  function handleForm(event){
    event.preventDefault()
    console.log("تم منع الحدث من حدوثها")
    // let email = document.getElementById("email").value;
    // console.log(email)
    // console.log(email.current.value)
    fetch("http://localhost:3000", {
      method:"POST",
      headers: { "Content-Type": "application/json"},
      body:JSON.stringify({"Email": email, "Password": password})
    }).then(request=> request.json()).then(data => 
      console.log(data))
      .catch(error => console.log(error)
      )
  }
  return (
    <>
     <form onSubmit={handleForm}>
      <label>Email</label>
      
      <input type="email"  onChange={(event)=> setEmail(event.target.value)} />
      <label>Password</label>
      <input type="password"  onChange={(event)=> setPassword(event.target.value)}/>
      <button type="submit">Login</button>
     </form>
    </>
  );
}

export default App;












