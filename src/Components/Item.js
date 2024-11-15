import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div>
        <div className='products'>
            <img src={"./img/" + this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
             <p>{this.props.item.img}</p>   
             <p>{this.props.item.desc}</p> 
             <p>{this.props.item.category}</p>   
             <b>{this.props.item.price}$</b>     

             <div className='add-to-card'>+</div>


        </div>
        

      </div>
    )
  }
}

export default Item