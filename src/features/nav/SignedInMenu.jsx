import React from 'react'
import { Menu,Dropdown,Image} from 'semantic-ui-react';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { signOutUser } from '../auth/authActions';

export default function SignedInMenu({signOut}){

    const dispatch = useDispatch();
    const {currentUser} = useSelector(s=>s.auth);
    const history = useHistory();

    return(
        <Menu.Item position="right">
        <Image avatar spaced="right" src={currentUser.photoURL || '/assets/user.png'}/>
        <Dropdown pointing="top left" text={currentUser.email}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                <Dropdown.Item text="My Profile" icon='user' />
                <Dropdown.Item onClick={()=>{

                    dispatch(signOutUser())
                    history.push('/')

                }
                    } text="Sign out" icon="power"/>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
    )
}