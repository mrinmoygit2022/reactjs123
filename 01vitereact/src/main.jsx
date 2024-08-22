// import { StrictMode, React } from 'react'
// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target:'_blank'},
//   'click me to visit Google'
// )

// React Scripts Documentations
// https://github.com/facebook/react/tree/main/scripts

ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement
    <App />
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
