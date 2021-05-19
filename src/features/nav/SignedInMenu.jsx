import React from 'react'
import { Menu,Dropdown,Image} from 'semantic-ui-react';
import {Link, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { signOutFirebase } from '../../app/firestore/firebaseService';
import { toast } from 'react-toastify';

export default function SignedInMenu({signOut}){

    const {currentUser} = useSelector(s=>s.auth);
    const history = useHistory();

    function handleSignOut(){

        signOutFirebase().then(()=>{
            history.push('/')
        }).catch((error)=>{
            toast.error(error.message)
        })

    }

    return(
        <Menu.Item position="right">
        <Image avatar spaced="right" src={currentUser.photoURL || '/assets/user.png'}/>
        <Dropdown pointing="top left" text={currentUser.displayName}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                <Dropdown.Item text="My Profile" icon='user' />
                <Dropdown.Item text="My account" icon='settings' as={Link} to="/account"/>
                <Dropdown.Item onClick={handleSignOut} text="Sign out" icon="power"/>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
    )
}