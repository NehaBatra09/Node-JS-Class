import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';


export const Header = ({ isScoll }) => {

    const [scroll, setScroll] = useState(false)
    const[height,setHeight]=useState(window.scrollY)
    
    useEffect(() => {
        if (parseInt(window.scrollY )> 20) {
            setScroll(true)
        } else {
            if (parseInt(window.scrollY) < 20) {
                setScroll(false)
            }
        }

    }, [height])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            setHeight(window.scrollY)
        }, true);
      }, []);
   


    return (<>
        <div className={scroll ? "navColor" : "navTransparent"}>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Our projects</Link>
            <Link>Vendors</Link>
            <Link>Investors</Link>
            <Link>Associates</Link>
            <Link>Gallery</Link>
            <Link>Contact</Link>
        </div>
    </>)
}