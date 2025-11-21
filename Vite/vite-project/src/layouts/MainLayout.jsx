import React from 'react'
import { Outlet} from 'react-router-dom';
import Nav from '../components/nav.jsx';

const MainLayout = () => {
  return (
    <>
    <Nav />
      <Outlet />
    </>
  )
}

export default MainLayout
