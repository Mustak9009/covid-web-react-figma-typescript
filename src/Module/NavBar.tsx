import React, { useReducer,useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Sass/NavBar.scss";
import {reducer} from '../Contexts/NavContext';
function NavBar() {
  const [toggle, dispatchToggle] = useReducer(reducer,false);
  const [scroll,setScroll] = useState(false);
  const checkScroll=()=>{
    let windowWidth = window.scrollY;
    if(windowWidth >= 20){
      setScroll(true);
    }else{
      setScroll(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',checkScroll);
  },[]);
  return (
    <header>
      <nav className={`NavBar ${toggle?"Mobile__NavBar":""} ${scroll ? "scrollActive":""}`}>
        <h2 className="NavBar__Heading">Covid.</h2>
        <div className="NavBar__icon" onClick={()=>dispatchToggle()}>
          <GiHamburgerMenu />
        </div>
        <ul className="NavBar__links">
          <li><a href="#" onClick={()=>alert("Only scroll")}>Home</a></li>
          <li><a href="#" onClick={()=>alert("Only scroll")}>About</a></li>
          <li><a href="#" onClick={()=>alert("Only scroll")}>Center</a></li>
          <li><a href="#" onClick={()=>alert("Only scroll")}>Reports</a></li>
          <li><a href="#" onClick={()=>alert("Only scroll")}>Symptoms</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
