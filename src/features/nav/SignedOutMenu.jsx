import React from 'react'
import { useDispatch } from 'react-redux';
import { Menu,Button} from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';

export default function SignedOutMenu({setAuthenticated}){

    const dispatch = useDispatch()

    return(
        <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={()=>{
            dispatch(openModal({modalType:'LoginForm'}))
        }}/>
        <Button onClick={()=>{
            dispatch(openModal({modalType:'RegisterForm'}))
        }} basic inverted content="Register" style={{marginLeft:'0.5rem'}}/>
    </Menu.Item>
    )
}