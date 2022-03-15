import React, { ComponentType, useState } from 'react'

//the problem with render prop pattern 
//when we re run function component
//all will be rerender,
//the argument to toggle render, gonna be new function , not constant identity ,
//gonna prevent react being able to do react magic, react re-render 
// 

//render props makes it easy to add more data/ props 

//drawback is performance ,
//cant memoize, cant use hook directly inside callback function



type ToggleProp = {
  isOpen: boolean,
  toggle: () => void
}

const ToggleRender = ({ children }: { children: any }) => {
  const [isOpen, setOpen] = useState(true)

  const toggle = () => {
    setOpen(isOpen => !isOpen)
  }

  return children({ isOpen, toggle })
}
// ===== original function =======

// const Toggle_Function = ({ }) => {
//   const [isOpen, setOpen] = useState(true)

//   const toggle = () => {
//     setOpen(isOpen => !isOpen)
//   }

//   return <button onClick={toggle}>{isOpen ? 'Open' : 'Close'}</button>
// }

// ===== original function =======

const App_2 = () => {
  return (
    <div>

      {/* <ToggleRender
        //cannot add hook inside this
        //because gonna be different function next time 
        render={({ isOpen, toggle }: ToggleProp) => <div onClick={toggle}>Render Prop {isOpen ? 'Pattern' : ''}</div>
        } /> */}

      <ToggleRender
      //cannot add hook inside this
      //because gonna be different function next time 
      // change ::  render -> children
      >{({ isOpen, toggle }: ToggleProp) => <div onClick={toggle}>Render Prop {isOpen ? 'Pattern' : ''}</div>}</ToggleRender>
    </div>
  )
}

export default App_2;
