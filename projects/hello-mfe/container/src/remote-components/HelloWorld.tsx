import {mount} from 'helloworld/HelloWorld' ;
import React, { useEffect, useRef } from 'react';


const HelloWorld = ():JSX.Element => {

    const helloWorldDiv = useRef<HTMLDivElement>(null)
  
    useEffect( () => {
      mount(helloWorldDiv.current)
    }, [])

    return (<div ref={helloWorldDiv}></div>)

}

export default HelloWorld