import { useState } from 'react';
import LoginScreen from './Login';
import SignupScreen from './Signup';

export default function AuthLanding() {
    const [hasAccount, setHasAccount] = useState<boolean>(false);
    
    if (hasAccount) {
        return <LoginScreen />
    }
    return <SignupScreen />
}