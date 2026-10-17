import { useState } from 'react'

type Todo = { id: number; text: string; done: boolean }

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const add = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  return (
    <div style={{ maxWidth: 480, margin: '60px auto', fontFamily: 'system-ui' }}>
      <h1>react-webapp-app</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)}
               placeholder="New task..." style={{ flex: 1, padding: 8 }} />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {todos.map(t => (
          <li key={t.id} onClick={() => setTodos(todos.map(x =>
            x.id === t.id ? { ...x, done: !x.done } : x))}
              style={{ textDecoration: t.done ? 'line-through' : 'none',
                       cursor: 'pointer', padding: 4 }}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
