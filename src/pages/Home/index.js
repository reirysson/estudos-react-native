import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';

import { ContainerLogo, Logo } from './styles';

export default function Home() {
    return(
        <LinearGradient
            colors={['#1DDBB9', '#132742']}
            style={{ flex:1, justifyContent: 'center' }}
        >
            <StatusBarPage 
                barStyle='light-content'
                backgroundColor='#1DDBB9'
            />

            <ContainerLogo>
                <Logo source={require('../../assets/img/logo.png')} />  
            </ContainerLogo>

            
        </LinearGradient>
    )
}