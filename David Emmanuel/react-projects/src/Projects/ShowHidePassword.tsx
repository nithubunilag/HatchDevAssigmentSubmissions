import { useState } from "react"

export default function ShowHidePassword() {
    const [password, showPassword] = useState('')

    return <div className='project' style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        <PasswordInput password={password} setPassword={showPassword} />
    </div>
}

export function PasswordInput({ password, setPassword, name = 'password', required = false, className }: {
    password: string
    setPassword: (password: string) => void
    name?: string
    required?: boolean
    className?: string
}) {
    const [showPassword, setShowPassword] = useState(false)

    return <div className={className ? 'input-group ' + className : 'input-group'}>
        <input
            style={{ width: '100%' }}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            name={name} required={required}
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button onClick={() => setShowPassword(showPassword => !showPassword)}>
            <i className='material-icons'>{showPassword ? 'svisibility_off' : 'visibility'}</i>
        </button>
    </div>
}