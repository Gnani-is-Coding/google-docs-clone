import React, { useCallback } from 'react'
import Quill from "quill";
import "quill/dist/quill.snow.css"

function TextEditor() {
    // consst wrapperRef = useRef()
    
    //This used to be useEffect()
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        //wrapperRef.current.append(editor)
        
        wrapper.append(editor)
        //We are basically wrapping our toolbar inside our #container element
        new Quill(editor, {
            theme: 'snow'
        })

        
        // Here, the prob is we r not cleaning the old tool bars in useEffect
        // we need make sure that, we wrap all the tool bars inside a container, so that we can remove it all at once at 
        // the unmounting phase (makes sure we don't have multiple tool bars at the same time)

        // return () => {
        //     wrapper.innerHTML = ""
        // }

    },[])
    //If we use useEffect, sometimes it occur before all the wrappers r all set

    //TO ALWAYS MAKE SURE OUT wrapperRef IS DEFINED, ALL THE TIME, WE USE USECALLBACK() INSTEAD of useEffect()


  return (
    <div id="container" ref={wrapperRef}></div>
  )
}

export default TextEditor