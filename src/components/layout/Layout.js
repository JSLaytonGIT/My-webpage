import './Layout.scss'
import Header from '../header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='page'>
                <span className='tags top-tags'></span>
                <Outlet/>
                <span className='tags bottom-tags'>
                </span>
            </div>
        </div>
    )
}

export default Layout;