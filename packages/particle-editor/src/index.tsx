import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Hello World from Particle Editor!</h1>
        </div>
    )
}

console.log('Hi')
const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(<App />)
}
