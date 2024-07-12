import { useState } from "react"
import { PasswordInput } from "./ShowHidePassword"


export default function FormSubmission() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: '100%',
        maxWidth: 500,
        margin: '0 auto'
    } as React.CSSProperties

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Invalid email')
            return
        }
        setEmailError('')
        // Validate password
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter')
            return
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter')
            return
        }
        if (!/[0-9]/.test(password)) {
            setPasswordError('Password must contain at least one number')
            return
        }
        if (!/[^A-Za-z0-9]/.test(password)) {
            setPasswordError('Password must contain at least one special character')
            return
        }
        setPasswordError('')
        setSubmitted(true)
    }

    return <div className='project' style={{ marginTop: '2rem' }}>
        {!submitted && <Form
            name={name} setName={setName}
            email={email} setEmail={setEmail} emailError={emailError}
            password={password} setPassword={setPassword} passwordError={passwordError}
            handleSubmit={handleSubmit}
            style={formStyle}
        />}
        {submitted && <Submitted
            name={name} email={email}
            handleEdit={() => setSubmitted(false)}
            style={formStyle}
        />}
    </div>
}

function Form({ name, setName, email, setEmail, emailError, password, setPassword, passwordError, handleSubmit, style }: {
    handleSubmit: (e: React.FormEvent) => void
    name: string, setName: (name: string) => void
    email: string, setEmail: (email: string) => void, emailError: string
    password: string, setPassword: (password: string) => void, passwordError: string
    style: React.CSSProperties
}) {
    return <form onSubmit={handleSubmit} style={style}>
        <input
            type='text' name='name' placeholder='Name' required
            value={name} onChange={e => setName(e.target.value)}
        />
        {emailError && <p style={{ color: 'red', margin: 0 }}>{emailError}</p>}
        <input
            type='email' name='email' placeholder='Email' required
            value={email} onChange={e => setEmail(e.target.value)}
            className={emailError ? 'error' : ''}
        />
        <PasswordInput
            password={password} setPassword={setPassword}
            required className={passwordError ? 'error' : ''}
        />
        {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}
        <button type='submit'>Submit</button>
    </form>
}

function Submitted({ name, email, style, handleEdit }: {
    name: string
    email: string
    style: React.CSSProperties
    handleEdit: () => void
}) {
    return <div style={{ ...style, gap: 0 }}>
        <h2>Submitted Details</h2>
        <p style={{ margin: 0 }}>Name: {name}</p>
        <p style={{ margin: 0 }}>Email: {email}</p>
        <button onClick={handleEdit}>Edit</button>
    </div>
}