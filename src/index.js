import ReactDOM from 'react-dom';
import { useState } from 'react'
//import Home from './Home'
import Quiz from './Quiz'
import './assets/reset.css'
import './assets/style.css'

import logo from './assets/logo.png'


const minhaTela = document.querySelector(".root");
ReactDOM.render(<App/>, minhaTela); 

export default function App(){
    const [page,setPage]=useState('home')
    function Home(){
        return(
            <>
            <div className="content">
                <img className="home-image" src={logo}/>
                <button onClick={()=>setPage('card')}>
                    Praticar React
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </button>
            </div>
            </>
        )
    }
    return(
        <>
        {page=='home'?<Home></Home> : <Quiz></Quiz>} 
        
        
        </>
    )
}






//  const [paginaAtual,setPaginaAtual] = useState('home')