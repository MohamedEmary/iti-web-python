import { useState } from 'react'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Navbar />
      <Counter 
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </>
  )
}

export default App