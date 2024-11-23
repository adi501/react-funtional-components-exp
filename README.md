**How to use GetElementById and apply style using useEffect ?**
```
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
```
![image](https://github.com/user-attachments/assets/9c80ca18-278e-483e-879e-39bce6aa77e6)

**Stateless Component**
```
import React from "react";

function Stateless_Component_Exp(){
    let count=0; // Initial data
    const increment=()=>{
        count+=1;
        console.log("Count:"+count);
    };
    return(
<>
<p>Stateless Component</p>
<p>Count:{count}</p>
<button onClick={increment}>Click</button>
</>
    );
}
export default Stateless_Component_Exp
```
![image](https://github.com/user-attachments/assets/724e869b-e244-4e48-8479-bf1e1a1e6f48)

**Props Example in Funtional components**
```
import React from "react";
import Props_Exp_child from './Props_EXP_child';

function Props_Exp_parent(){
    return(<>
    <p>Parent Component</p>
    <Props_Exp_child name="Adi" email="myEmail"/>
    </>)
};
export default Props_Exp_parent;
```
```
import React from "react";

function Props_Exp_child(props){
    return(<>
    <p>Child Component</p>
    <p>Name:{props.name}</p>
    <p>Name:{props.email}</p>
    </>)
};
export default Props_Exp_child;
```
![image](https://github.com/user-attachments/assets/9faa486c-6c8b-4f8a-869c-a863945b6c1d)

**function without a return**
```
function Function_without_a_return(){
    console.log("function without a return");
} 
export default Function_without_a_return;
```
![image](https://github.com/user-attachments/assets/e58735b6-6286-41be-9379-7f68a3fc47a3)

**Map Example**
```
import React from "react";

function MAP_EXP1(){
    const arr=[1,2,3,4,5];
    return(<>
    <ul>
        {
            arr.map(num=><li>{num}</li>)
        }
    </ul>
    </>)
};
export default MAP_EXP1;
```
![image](https://github.com/user-attachments/assets/74bf0e56-085a-446c-b1f7-17fd48507c55)

**Class Components In React**
```
import React from 'react';
class Class_Components_exp extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <>
      <h2>Class Components exp</h2>
      <p>I am a {this.state.color} Car!</p></>;
    }
  }
  export default Class_Components_exp;
```
![image](https://github.com/user-attachments/assets/ba150b4f-45ea-4cf8-8037-376c662e6079)

****Hooks****
**UseState hook Example**
```
import { useState } from "react";

export default function UseState_Exp()
{
    const[count,setCount]=useState(0);
    const handleClick=()=>
    {
                setCount(count + 1);
    }
    return (<>
    <h5>useState Hook Exp</h5>
    <div>Count: {count}</div>
    <button onClick={handleClick}>Count ++</button>
    </>);
} 
```
![image](https://github.com/user-attachments/assets/5fa38661-0d98-431c-878a-abd3b58ac555)
**useEffect() Example**
```
import React, { useEffect } from "react";

function UseEffect_EXP1() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const result = await response.json();
      console.log("Title:", result.title);
    };
    fetchData();
  }, []); 
  return (
    <div>
      <p>Data is being fetched...</p>
    </div>
  );
}
export default UseEffect_EXP1;
```
![image](https://github.com/user-attachments/assets/e762b1ce-b37d-4769-b66b-a8bb96f1fa95)


**UseEffect with Dependencies example**
```
import React from "react";
import { useState,useEffect } from "react";

export default function UseEffect_Dependencies_Exp1(){
    const[userId,setUserId]=useState(1);
    const[data,setData]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
              );
              const result = await response.json();
              setData(result);
        }
        fetchData();
    },[userId]);
    return(<>
    <h2>Data Fetching with Dependencies</h2>
    <label>User ID: </label>
    <input type="number" value={userId} 
    onChange={(e)=>setUserId(e.target.value)}></input>
    {data&&(<div>
        <h3>User Details:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>)}
    </>)
};
```
![image](https://github.com/user-attachments/assets/3c49a1d9-3e08-4a70-a0f2-5676db9e8437)

**useReducer() Hook example**


![image](https://github.com/user-attachments/assets/3e65f6ab-9a6b-41bd-a35f-252636d4311d)
![image](https://github.com/user-attachments/assets/7d9c6cc3-4706-4b70-b4ae-35e10218ddb2)

**useCallback() Example**

![image](https://github.com/user-attachments/assets/e6ade3fb-4290-4ef5-a4a5-b3c086ced441)

**useMemo() Example**
![image](https://github.com/user-attachments/assets/8dc4189f-103d-439d-bfa6-8fc876baf47d)
![image](https://github.com/user-attachments/assets/04f70417-3ad5-4890-8888-63768b74c0bd)

**When to use useLayoutEffect() Hook?**
 	For example, below the paragraph element style(bold/ normal) is dependent on the side effect data, then we use useLayoutEffect. 
![image](https://github.com/user-attachments/assets/a15d55ad-2ad4-444a-aaa4-28bef9a89466)
























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
