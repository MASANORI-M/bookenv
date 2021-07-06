import React from 'react';
import Image from 'next/image';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import link from 'next/link';

const Menues = () => {
    return (
        <div>
            <Menu menuButton={<MenuButton><Image width="70" height="70" src="/login.png" alt=""></Image></MenuButton>}>
                <MenuItem>
                    <a href="../../pages/mypage/MyReview">
                        MY PAGE
                    </a>
                </MenuItem>
                <MenuItem>PROFILE</MenuItem>
                <MenuItem>LOGOUT</MenuItem>
                <MenuItem>退会</MenuItem>
            </Menu>
        </div>
    );
};

export default Menues;