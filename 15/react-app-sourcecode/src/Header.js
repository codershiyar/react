export default function Header(props){
    return  ( 
    <header>
        <nav className="navbar ">
            <div> <span className="navbar-brand mb-0 h1">{props.title}</span>
            {props.login? <img id="Logout" title="Logout" src="logout.png" onClick={()=>{window.location.reload()}} />:<></>}
            </div>
            <img src="logo.png" alt="Logo" height="60"/>
        </nav>
    </header>)
}
