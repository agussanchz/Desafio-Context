//Importaciones
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

//Exportacion de mi funcion ItemDetail, que es la encargada de recibir productos y
// armar una card con sus caracteristicas
export default function ItemDetail({item}) {
  const [goToCart, setGoToCart] = React.useState(false)
  const onAdd = (quantity) => {
    setGoToCart(true)
  }

  return (
    <div className='item-card'>
        <Card  className='card' style={{ width: '40rem'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">{item.price}</Button>
                {
                  goToCart 
                  ? <Link to='/cart'>Terminar Compra</Link>
                  : <ItemCount stock={item.stock} onAdd={onAdd}/>
                }
            </Card.Body>
        </Card>
    </div>
  )
}
