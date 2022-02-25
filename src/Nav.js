import React,{useState} from 'react'
function Nav(){
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" ></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="App.js">Home</a>
        </li>
        
        
       
      </ul>
      
    </div>
  </div>
</nav>
)
}
export default Nav;