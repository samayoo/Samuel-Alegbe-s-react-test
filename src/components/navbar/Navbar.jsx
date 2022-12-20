import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'; 

function TopBar() {
    return (
        <>
            <div className='topBar'>
                <nav className='nav'>
                    <ul className='unorderedListHeader'>
                        <li className='listHeader'><Link to='/' className='link'>Home</Link></li>
                        <li className='listHeader'><Link to='/about' className='link' >About</Link></li>
                        <li className='listHeader'><Link to='/blog' className='link'>Blog</Link></li>
                        <li className='listHeader'><Link to='/interest' className='link'>Interest</Link></li>
                        <li className='listHeader'><Link to='/events' className='link'>Events</Link></li>
                        <li className='listHeader'><Link to='/faq' className='link'>Faq</Link></li>
                        <li className='listHeader'><Link to='/quotes' className='link'>Quotes</Link></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default TopBar