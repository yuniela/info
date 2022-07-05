import React from "react";
import { RegisterScreenLive } from "./components/RegisterLiveCourses";
import { RegisterScreen } from "./components/RegisterScreen";

export const AnubisApp = () => {
    return ( 
        <div className="register__main">
            
            <RegisterScreen/>
            {/* <RegisterScreenLive/> */}
            
        </div>
    )
}