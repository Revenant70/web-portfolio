import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="App fixed">
            <nav className="flex flex-row gap-8 text-xl p-6 pl-8">
                <NavLink className='font-serif text-2xl' to='/'>
                    Home
                </NavLink>
                <NavLink className='font-serif text-2xl' to='/Projects'>
                    Projects
                </NavLink>
                <NavLink className='font-serif text-2xl'to='/About'>
                    About
                </NavLink>
                <NavLink className='font-serif text-2xl' to='/Contact'>
                    Contact
                </NavLink> 
            </nav>
        </div>
    )

}

export default Navbar