import { useState } from 'react'
import logo from './assets/logo.png'
export default function Home(){
    return(
        <>
        <div className="content">
            <img className="home-image" src={logo}/>
            <button onClick={setPaginaAtual('card')}>
                Praticar React
                <ion-icon name="caret-forward-outline"></ion-icon>
                <ion-icon name="caret-forward-outline"></ion-icon>
                </button>
        </div>
        </>
    )
}

const [paginaAtual,setPaginaAtual] = useState('home')