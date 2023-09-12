import { Outlet } from 'react-router-dom'

import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout(){
    return(
        <div className="App">
            <Navbar />
            <div className='page'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )

}

export default Layout