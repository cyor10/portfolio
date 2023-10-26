import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Writer() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Desarrolladora MERN",
                    "Colaboradora de código abierto"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}
