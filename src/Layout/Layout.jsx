import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutWrapper } from './LayoutStyled';
import {toggleHiddenCarro} from '../redux/carro/carroSlice'

const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const hiddenMenu = useSelector(state => state.user.hiddenMenu)
    const { pathname } = useLocation();
  
    useEffect(() => {
      if (!hiddenMenu) {
        dispatch(toggleHiddenCarro())
      }
      window.scrollTo(0, 0);
    }, [pathname]);
    return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout