import React,{useState} from "react";
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import Footer from "./comp/Footer";
import Navbar from "./comp/Navbar";



const clientId = "648248370209-0r2erdmbdg54eftnmj2p3ruhj10qmng2.apps.googleusercontent.com";

function User(){

    const [isMouseOver,setMouseOver] = useState(false);
    const [loginData,setLoginData]=useState(localStorage.getItem('loginData')? JSON.parse(localStorage.getItem('loginData')): null);

    const onLoginSuccess = async(googleData) => {
        console.log('Login Success:', googleData.profileObj);
        const res = await fetch('/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
            token: googleData.tokenId,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };

    const onLoginFailure = (googleData) => {
        console.log('Login Failed:', googleData);
    };

    const onSignoutSuccess = () => {
        console.clear();
        localStorage.removeItem('loginData');
        setLoginData(null);
    };
    console.log(loginData);
    
    return(
        <>
            <Navbar/>
            <div  >
            .
            </div>
            <div  >
                {
                loginData ? (<> Hi,  {loginData.name} 👋   <br/>
                 your orders details are being send to  {loginData.email} </>) : (<> </>)
                }
                <br/>
                <hr/>
  
            { loginData ? (
                
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out from Google"
                            onLogoutSuccess={onSignoutSuccess}
                        /> 
                   
            )

            : (
                
                   
                        <GoogleLogin 
                        clientId={clientId}
                        buttonText="Sign In with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        />
                   
                )
            }      
            </div>

        <Footer/>
        </>
    )
}

export default User;
