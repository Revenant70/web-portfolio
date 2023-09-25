import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from "./Footer"
import Socials from "./Socials"


function Layout(){
    return(
        <div className="App">
            <Navbar />
            <div className='page'>
                <Outlet />
            </div>
            <Socials />
            <Footer />
        </div>
    )

}

export default Layout