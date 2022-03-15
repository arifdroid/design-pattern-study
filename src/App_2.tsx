import React, { ComponentType, useState } from 'react'

// withToggle , HOC 
//component that accepts other component 

type ToggleProp = {
  isOpen: boolean,
  toggle: () => void
}

//
const withToggle = (Component: ComponentType<ToggleProp>) => {
  //return function of the stateful
  return (
    () => {
      const [isOpen, setOpen] = useState(true)

      const toggle = () => {
        setOpen(isOpen => !isOpen)
      }

      return <Component isOpen={isOpen} toggle={toggle}></Component>
    }
  )

}


const DropdownViewLayer: React.FC<ToggleProp> = ({ isOpen, toggle }) => {
  return (
    <>
      <div onClick={toggle}>Dropdown</div>
      <>{isOpen && <div>this is the dropdown</div>}</>
    </>
  )
}

const Dropdown = withToggle(DropdownViewLayer)

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

      <Dropdown />
    </div>
  )
}

export default App_2;
