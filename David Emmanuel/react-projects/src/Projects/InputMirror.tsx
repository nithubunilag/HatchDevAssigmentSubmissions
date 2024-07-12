import { useState } from "react"

export default function InputMirror() {
    const [text, setText] = useState('')

    return <div className='project'>
        <input style={{width: '100%'}} value={text} onChange={e => setText(e.target.value)} />
        <p>{text}</p>
    </div>
}