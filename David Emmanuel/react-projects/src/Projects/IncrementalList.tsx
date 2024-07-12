import { useState } from "react"

export default function IncrementalList() {
    // Description: Create a button that adds a new item to a list with each click
    const [items, setItems] = useState<string[]>([])

    const addItem = () => {
        setItems(items => [...items, `Item ${items.length + 1}`])
    }

    return <div className='project' style={{ maxWidth: 500, marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    </div>
}