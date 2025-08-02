import React from 'react'
import { createRoot } from 'react-dom/client'

const App: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#191919',
                color: 'white',
                fontFamily: 'Arial, sans-serif',
            }}
        >
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
