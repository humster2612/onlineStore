import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';  
import './Index.css'; 
import './img/bg.jpg';
import Items from './Components/Items';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
            {
                id:1,
                title:'Стул серий',
                img:'chair.jpg',
                desc:'lorem ipsum dolor sit amet',   
                category:'chairs',
                price: '49.99',
            },

            {
                id:2,
                title:'Стол',
                img:'table.jpg',
                desc:'lorem ipsum dolor sit amet',   
                category:'tables',
                price: '149.99',
            },
        
            {
                id:3,
                title:'Диван',
                img:'sofa.jpg',
                desc:'lorem ipsum dolor sit amet',   
                category:'sofa',
                price: '249.99',
            }

        ]
            
        }   
    }


        render(){
            return (
                <div className='wrapper'>
                    <Header/>
                    <Items items={this.state.items} />
                    <Footer/>
                </div>
              );
            }   
        }
  




export default App;