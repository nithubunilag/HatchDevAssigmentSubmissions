import { useState } from "react";

export default function ToggleText() {
    const [showText, setShowText] = useState(false);

    return <div className='project' style={{ display: 'flex', flexDirection: 'row', gap: '1rem', height: 50 }}>
        <button
            style={{ width: 125, backgroundColor: '#333', color: 'white' }}
            onClick={() => setShowText(showText => !showText)}
        >
            {showText ? 'Hide' : 'Show'} Text
        </button>
        {showText && <p style={{ flex: 1 }}>This is the hidden text.</p>}
    </div>
}