import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Component1'
import SimpleInput from './components/Component2'
import RandomName from './components/Component3'
import AddNames from './components/Component4'
import ToggleTheme from './components/Component5'
import ProductDetails from './components/Component6'
import TodoList from './components/Component7'

function App() {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: 'Product A',
        price: 20.99,
        description: 'This is product A, a great item for your needs.',
    },
    {
        id: 2,
        name: 'Product B',
        price: 15.49,
        description: 'Product B is a fantastic choice for your everyday use.',
    },
    {
        id: 3,
        name: 'Product C',
        price: 29.99,
        description: 'Product C is a high-quality option with advanced features.',
    },
  ])

  return (
    <>
      {/* <Counter /> */}
      {/* <SimpleInput /> */}
      {/* <RandomName /> */}
      {/* <AddNames /> */}
      {/* <ToggleTheme /> */}
      {/* <ProductDetails products={products}/> */}
      <TodoList />
    </>
  )
}

export default App
