import React from 'react';
import { useEffect } from 'react';

 export default function Get_an_Element_by_ID_in_ReactJS() {
    useEffect(() => {
        const element = document.getElementById('h1');
            // Manipulate the retrieved element's style
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
            // Add more styling properties as needed
    }, [])
        return (
            <>
                <h1 id="h1">
                    AdiNarayana Reddy
                </h1>
            </>
        );
}



