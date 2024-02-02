import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const location  = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile");
            }else{
                setPageState("Sign in")
            }
        })
    },[auth])
    // console.log(location.pathname);
    function pathMatchRoute(route) {
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between items-center px-3
        max-w-6xl mx-auto'>
            <div>
                  <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMThfM2Rfb2ZfYV9taW5pbWFsX2Vtb2ppX2lzb2xhdGVkX29uX3doaXRlX2JhY2tncl8wZDUzYTFiYy01NWY1LTQ4MTQtYTUzOC0yZGZkZTNjMGE2ZTgucG5n.png" alt="logo" 
                  className='h-5 cursor-pointer' onClick={()=> navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                      <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-600"} `} onClick={() => navigate("/")}>Home</li>
                      <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") || pathMatchRoute("/profile") && "text-black border-b-red-600"}`} onClick={() => navigate("/profile")}>{pageState}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
