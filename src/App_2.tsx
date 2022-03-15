import React, { ComponentType, useState } from 'react'

//hooks to include stateful logic and function component 
//eliminate burden support class based component 

//easy and accessible escape hatch for sharing stateful logic



type ToggleProp = {
  isOpen: boolean,
  toggle: () => void
}

//this is custom hook
//now we can use the same custom hook with other 
const useToggle = () => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => {
    setOpen(isOpen => !isOpen)
  }
  //as const -> so typescript to treat these as pair , an array with two types in it
  //[ boolean , function ]
  return [isOpen, toggle] as const;

}


const Checkbox = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <input type='checkbox' checked={isOpen} onClick={toggle} />
  )
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
      <Checkbox />

    </div>
  )
}

export default App_2;
