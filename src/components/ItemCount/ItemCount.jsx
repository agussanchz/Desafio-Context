import React from 'react'

export default function ItemCount({stock, onSubmit, count, setCount}) {
    const increase = () => {
        setCount( count + 1)
    }

    const decrease = () => {
       setCount(count - 1)
    }

  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onSubmit()}>Agregar al carrito</button>
        </div>
    </div>
  )
}
 