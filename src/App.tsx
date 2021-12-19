import React from 'react' ;
import './App.module.css';
import s from './Counter/Counter.module.css'
import Counter from "./Counter/Counter";

function App() {
    document.title="Counter"
    return (
        <div>
            <Counter/>
        </div>
    );
}

export default App;
