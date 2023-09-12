import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <div className="App w-screen h-screen">
            <nav className="flex flex-row gap-8 text-xl p-6 pl-8">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/Projects'>
                    Projects
                </NavLink>
                <NavLink to='/About'>
                    About
                </NavLink>
                <NavLink to='/Contact'>
                    Contact
                </NavLink> 
            </nav>
            
        </div>
    )

}

export default Navbar