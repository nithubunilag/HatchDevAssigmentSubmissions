import { useState } from "react"

export default function CharacterCounter() {
    const [text, setText] = useState('')

    return <div className='project' style={{marginTop: '3rem'}}>
        {text && <p>{text.length} {text.length === 1 ? 'character' : 'characters'}</p>}
        <textarea
            style={{width: '100%'}}
            placeholder='Type here...'
            value={text}
            onChange={e => setText(e.target.value)}
            rows={5}
        />
    </div>
}