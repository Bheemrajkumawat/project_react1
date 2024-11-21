import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './Home.css';

function Home() {
    return (
        <div className="sty">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />
        </div>
    );
}

export default Home;