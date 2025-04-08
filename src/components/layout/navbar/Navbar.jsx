import React from 'react'
import './navbar.css'

//  const Navbar = ({item, item2}) => {
//   return (
//     <>
//       <div style={{backgroundColor: 'red', color: '#000', padding: '10px'}}>{item}</div>
//       <div style={{backgroundColor: 'blue', color: '#000', padding: '10px'}} >{item2}</div>
//     </>
//   )
// }

// export const Dan = () => {
//   return (
//     <div>Dan</div>
//   )
// }

const Navbar = () => {
  return (
    <> 
        <div>
            <ul className='nav-list'>
                <li className='nav-item'><a href='#'>Home</a ></li>
                <li className='nav-item'><a href='#'>About</a></li>
                <li className='nav-item'><a href='#'>Service</a></li>
                <li className='nav-item'><a href='#'>Portfolio</a></li>
                <li className='nav-item'><a href='#'>Gallery</a></li>
                <li className='nav-item'><a href='#'>Contact</a></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar

