import { useState } from "react"

export default function ColorSwitcher() {
    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    const switchColor = () => {
        setR(Math.floor(Math.random() * 256))
        setG(Math.floor(Math.random() * 256))
        setB(Math.floor(Math.random() * 256))
    }

    return <div className='project' style={{
        alignItems: 'center',
        marginTop: '1rem',
        gap: '1rem',
    }}>
        <button
            onClick={switchColor}
            style={{ backgroundColor: '#333', color: 'white' }}
        >
            Click to Switch Color
        </button>
        <div style={{
            width: '100%',
            maxWidth: 400,
            height: 400,
            backgroundColor: `rgb(${r},${g},${b})`
        }} />
    </div>
}