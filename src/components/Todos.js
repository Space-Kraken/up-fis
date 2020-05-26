import React, { Component } from 'react';
import db from '../utils/Firebase';
import { Table, Button ,Row,Col,Input ,InputGroup} from 'reactstrap';

export default class Todos extends Component {
    state ={
        items:[],
        inputValue:""
    }

    componentDidMount() {
        db.collection("reg_pagos").onSnapshot((snapShots) =>{
            this.setState({ 
                items:snapShots.docs.map(doc => {
                return {id: doc.id,data: doc.data()}
            })
        })
        })
    }
changeValue=(e)=>{
    this.setState({
        inputValue:e.target.value})
};
action =() => {
const{inputValue}=this.state;
db.collection("reg_pagos").add({
    domicilio:inputValue
}).then(() =>{
    console.log("Agregado")
}).catch(()=>{
    console.log("error")
})
}

render(){
    const {items,inputValue} = this.state;
    return(
    <div>
<Row>
    <Col xs="10">
        <InputGroup>
            <Input placeholder="Agregar nuevo" 
            value={inputValue}
            onChange={this.changeValue}
            />
        </InputGroup>
    </Col>
    <Col xs="2">
        <div className="text-right">
<Button color = "info" onClick={this.action}>
'Agregar'
</Button>
        </div>
    </Col>
</Row>
<br/>





          <Table hover className="text-center">
              <thead>
                  <tr>
                      <th>Domicilio</th>
                      <th>Fecha</th>
                      <th>Monto</th>
                      <th>Numero</th>

                  </tr>
              </thead>
              <tbody>
                  {items && items !== undefined ? items.map((item,key)=>(
                      <tr key={key}>
                          <td>{item.data.domicilio}</td>
                          <td>{item.data.fecha}</td>
                          <td>{item.data.monto}</td>
                          <td>{item.data.numero}</td>
                          <td> <Button color="warning">Editar</Button></td>
                          <td> <Button color="danger">Eliminar</Button></td>
                      </tr>
                  )): null}
              </tbody>
          </Table>
    </div>
    )   
}
}