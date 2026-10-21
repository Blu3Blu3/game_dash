import { useState } from 'react'
import APIShowcase from './components/APIShowcase'
import './App.css'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

function App() {
    

    return (
        <div>
            <p>I'm an alligator!</p>
            <APIShowcase key={ACCESS_KEY} />
        </div>
    )
}

export default App
