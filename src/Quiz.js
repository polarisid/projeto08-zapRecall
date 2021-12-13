import turn from '../src/assets/turn.png'
import logo from '../src/assets/logo-mini.png'
import { useState } from 'react'

const contentcards =[
    {question:'O que é JSX?', answer:'Uma extensão de linguagem do JavaScript'},
    {question:'O React é __ ', answer:'uma biblioteca JavaScript para construção de interfaces'},
    {question:'Componentes devem iniciar com __ ', answer:'letra maiúscula'},
    {question:'Podemos colocar __ dentro do JSX', answer:'expressões'},
    {question:'O ReactDOM nos ajuda __ ', answer:'interagindo com a DOM para colocar componentes React na mesma'},
    {question:'Usamos o npm para __ ', answer:'gerenciar os pacotes necessários e suas dependências'},
    {question:'Usamos props para __', answer:'passar diferentes informações para componentes '},
    {question:'Usamos estado (state) para __ ', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
]
export default function Quiz(){
    const[state,setState]=useState('front')
    const[color,setColor]=useState('none')
    const[card,setCard]=useState(0)
    
    function CardFront(props){
        
        return(
            <>
            <div className="card">
                <header className="top-card-bar"><span>{props.index}/{contentcards.length}</span></header>
                <h1>{props.question}</h1>
                <img className="turn-back-button" onClick={()=>setState('back')} src={turn}/>
            </div>
            </>
        )
    }
    function CardBack(props){
        
        return(
            <>
            <div className="card">
                <header className="top-card-bar"><div className="title-question">{props.question}</div> <span>{props.index}/{contentcards.length}</span></header>
                <h1>{props.answer}</h1>
                <div className="bottom-bar">
                    <button onClick={()=>setColor('a')} id="a">Aprendi agora</button>
                    <button onClick={()=>setColor('b')} id="b">Não lembrei</button>
                    <button onClick={()=>setColor('c')} id="c">Lembrei com esforço</button>
                    <button onClick={()=>setColor('d')} id="d">Zap!</button>
                </div>
            </div>
            </>
        )
    }
    function CardBackReaction(props){
        return (
            <>
                <div className="card" id={props.color}>
                <header className="top-card-bar"><div className="title-question">{props.question}</div> <span>{props.index}/{contentcards.length}</span></header>
                <h1>{props.answer}</h1>
                <img className="turn-back-button"  onClick={()=>final()}  src={turn}/>
                </div>
            </>
        )
    }
    function final(){
 
            {
                if(card<(contentcards.length -1)){
                    
                    
                    setCard(card+1); 
                    setState('front'); 
                    setColor('none');
                    
                     
                }
                else{alert("Ok")}

            }

    }

    return(
        <>
        <header className="top-bar"><img src={logo}/></header>
        <div className="cards">
        {state=='front'?<CardFront question={contentcards[card].question}  index={card+1}/> : color=='none'? <CardBack index={card+1} question={contentcards[card].question} answer ={contentcards[card].answer} />:<CardBackReaction question={contentcards[card].question} index ={card+1}color={color} answer ={contentcards[card].answer}/>}        
        </div>
        </>
    )
}

