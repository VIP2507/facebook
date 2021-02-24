import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

import Avatar from '@material-ui/core/Avatar'
import {IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon  from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStateValue } from '../../StateProvider'

function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="header">
                <div className="header__left">
                        <img src="download.png" alt="logo" />
                    <div className="header__input">
                        <SearchIcon/>
                        <input type="text" placeholder="Search Facebook" />
                    </div>
                </div>
           
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                     <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                     <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                </div>
            </div>
           
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} alt="prince"/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                     <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        
        </div>
    )
}

export default Header
