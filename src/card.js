function CardFront(){
        
    return(
        <>
        <div className="card">
            <header>1/8</header>
            <h1>Uma extensão de linguagem do JavaScript</h1>
            <div>
                <button>ok</button>
                <button>ok</button>
                <button>ok</button>
                <button>ok</button>
            </div>
        </div>
        <div className="card">
            <header>1/8</header>
            <h1>O que é JSX?</h1>
            <img onClick={setState('turn')} src={turn}/>
        </div>
        </>
    )
}