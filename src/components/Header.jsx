import { IconButton, Drawer } from '@material-ui/core';
import React from 'react';
import profilePic from './../containers/Images/userAvatar.png';
import SideMenu from './SideMenu';
import SearchBar from './SearchBar';
import MenuIcon from '@material-ui/icons/Menu';
import constants from '../constants';

export default (props) => {
    const {query} = props;
    const [state, setState] = React.useState({
        left: false
      });
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, left: open });
    };
    return (
        <div className="w-full shadow flex content-center justify-center fixed top-0 bg-white z-10">
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer(false)}>
                <SideMenu />
            </Drawer>
            <div className="flex items-center justify-between w-11/12">
                <div className="flex items-center">
                    <IconButton onClick={toggleDrawer(true)} style={{outline:'none'}}>
                        <MenuIcon />
                    </IconButton>
                    <a href="/">
                        <div className="font-bold text-2xl md:hidden"><span className="text-blue-600">{constants.getTitle('letter')}</span>T</div>
                        <div className="font-bold text-2xl hidden md:block"><span className="text-blue-600">{constants.getTitle('camel')}</span>Tube</div>
                    </a>
                </div>
                <SearchBar query={query} />
                <div className="h-10 w-10 cursor-pointer hidden md:block">
                    <img src={profilePic} className="object-fit h-10 w-10 rounded-full" alt=""/>
                </div>
            </div>
        </div>
    )
}