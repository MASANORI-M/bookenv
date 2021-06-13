import React from 'react';
import Image from 'next/image';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Menues = () => {
    return (
        <div>
            <Menu menuButton={<MenuButton><Image width="70" height="70" src="/login.png" alt=""></Image></MenuButton>}>
                <MenuItem>MY BOOK</MenuItem>
                <MenuItem>EVALUTION</MenuItem>
                <MenuItem>LOGIN</MenuItem>
            </Menu>
        </div>
    );
};

export default Menues;