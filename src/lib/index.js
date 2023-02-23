import React from "react";
import "./index.scss";
import {CustomButton} from "./components/button";


export const HelloWorld = () => {
    return (
        <div className="hello-wrapper">
            Hello world!
        </div>
    );
};

export const InputBox = () => {
    return(
        <div>
            <input />
        </div>
    )
}

export { CustomButton };

/*
    make components directory for better structuring and export everything here.
    export {HelloWorld} from "./components/hello";
    export {InputBox} from "./components/input";
*/
