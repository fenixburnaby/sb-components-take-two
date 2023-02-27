import React from 'react';
import reactDom from 'react-dom';
import {HelloWorld, InputBox} from "./lib";
import {CustomButton} from "./lib/components/button/index.ts";

const App = () => {
    return(
        <div>
            <HelloWorld />
            <InputBox />
            <CustomButton variant='contained' innerText='Hello Custom Component' onClick={() => alert('Hello there!')} />
        </div>
    )
}
reactDom.render(<App/>, document.getElementById("root"));
