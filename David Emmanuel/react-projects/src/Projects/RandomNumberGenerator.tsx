import { useState } from "react"

export default function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(0)

    return <div className='project' style={{ display: 'flex', flexDirection: 'row', gap: '1rem', height: 50 }}>
        <button
            style={{ width: 125, backgroundColor: '#333', color: 'white' }}
            onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}
        >Generate</button>
        <h3 style={{ flex: 1, margin: 0, display: 'flex', alignItems: 'center' }}>{randomNumber}</h3>
    </div>
}