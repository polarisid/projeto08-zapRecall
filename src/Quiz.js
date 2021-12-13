import turn from '../src/assets/turn.png'
import logo from '../src/assets/logo-mini.png'
import sad from '../src/assets/sad.png'
import happy from '../src/assets/party.png'
import { useState } from 'react'
let card =0;
let pointCounter =0;
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
export default function Quiz({setPage}){
    //const[card,setCard]=useState(0)
    const[state,setState]=useState(<CardFront question={contentcards[card].question}  index={card+1}/>)
    const[color,setColor]=useState(<CardBackReaction question={contentcards[card].question} index ={card+1}color='none' answer ={contentcards[card].answer}/>)
  
    
    function CardFront(props){
        
        return(
            <>
            <div className="card">
                <header className="top-card-bar"><span>{props.index}/{contentcards.length}</span></header>
                <h1>{props.question}</h1>
                <img className="turn-back-button" onClick={()=>setState(<CardBack index={card+1} question={contentcards[card].question} answer ={contentcards[card].answer} />)} src={turn}/>
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
                    <button onClick={()=>setState(<CardBackReaction question={contentcards[card].question} index ={card+1} color="a" answer ={contentcards[card].answer}/>)} id="a">Aprendi agora</button>
                    <button onClick={()=>{setState(<CardBackReaction question={contentcards[card].question} index ={card+1} color="b" answer ={contentcards[card].answer}/>); pointCounter++; }} id="b">Não lembrei</button>
                    <button onClick={()=>setState(<CardBackReaction question={contentcards[card].question} index ={card+1} color='c' answer ={contentcards[card].answer}/>)} id="c">Lembrei com esforço</button>
                    <button onClick={()=>setState(<CardBackReaction question={contentcards[card].question} index ={card+1} color='d' answer ={contentcards[card].answer}/>)} id="d">Zap!</button>
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
                    //setCard(card+1);
                    card++; 
                    setState(<CardFront question={contentcards[card].question}  index={card+1}/>); 
                    setColor('none');
                }
                else{setState(<FinalPage point ={pointCounter}/>)}
            }
    }

    return(
        <>
        <header className="top-bar"><img src={logo}/></header>
        <div className="cards">
        {state/* {state=='front'?<CardFront question={contentcards[card].question}  index={card+1}/> : color=='none'? :<CardBackReaction question={contentcards[card].question} index ={card+1}color={color} answer ={contentcards[card].answer}/>}         */}
        
        </div>
        </>
    )
}

function FinalPage(props){
    return (
        <>
          {props.point>0? <Fail/>: <Sucess/>}
        
        </>
    )
}

function Fail(){
    return  (
        <>
        <div className="result-container">
            <div className="result"> 
            Putz ...
            <img src = {sad}/> 
            <p className="text-result">Você esqueceu alguns flashcards.. Não desanime! Na próxima você consegue!</p>
            </div>

        </div>
        </>
    )
}
function Sucess(){
    return  (
        <>
        <div className="result-container">
            <div className="result"> 
            PARABÉNS! 
            <img src = {happy}/> 
            <p className="text-result">Você não esqueceu de nenhum flashcard!</p>
            </div>

        </div>
        </>
    )
}
