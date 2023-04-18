import React from 'react';
import reactDom from 'react-dom/client';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import '../css/styles.css'
import Example from './components/Example.jsx';

const header = "Hello, React";
const main = "ed";

function App() {

    return (
        <div className='app'>
            <Example isOpen={false}/>
        </div>
    );
}

reactDom.createRoot(
    document.getElementById('app')
)
.render(
    <App/>
);