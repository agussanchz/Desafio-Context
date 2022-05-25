//Importaciones
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import { products } from "../../Data/productos";

// Exportacion de mi funcion ItemListContainer, encargada de recibir productos y aplicarles logica
export default function ItemListContainer({categoryId}) {
  //Hook useState para guardar mis productos en un estado
  const [items, setItems] = React.useState([]);
  //Aplicacion de useEffect para guardar los productos utilizando un filter y asi distinguir las categoryId
  React.useEffect(() => {
    if(categoryId){
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(products);
    }
  },[categoryId])

  return (
    //Le paso a traves de props, los productos obtenidos a mi componente ItemList
    <div className='item-container-list'>
      <Container>
        <Row>
          <Col>
              <ItemList items={items}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
 