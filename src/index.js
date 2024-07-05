import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const myelement = <h1> Hellooooo </h1>;
const element = React.createElement("h1", null, "deepak");
// without using jsx , we are using React synatx to display h1
const element1= <h1> hello deepak </h1>; // jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
// function Hello1()
// {
//     return(
//         <h1> Hello from Hello1 Component </h1>
//     )
// }

// function Hello2()
// {
//     return(
//         <h2>  Hello from Hello2 Component </h2>
//     )
// }

// function Hello3()
// {
//     return(
//         <h2>  Hello from Hello3 Component </h2>
//     )
// }


// function Hello4({name})
// {
//     return(
//         <h1> Hello {name} </h1>
//     )
// }

// function Hello5(props)
// {
//     return(
//         <h1> Hello {props.name} , Your dept is {props.dept}
//         <br/>
//         and your manager is {props.manager} </h1>
//     )

// }
root.render([myelement,element,element1,<App/>]
    
      
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
