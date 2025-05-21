function Square() {
    return(
        <button className="outline box-border size-32 text-9xl">{}</button>
    )
}

export default function Board() {
    return(
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row -mt-1.5">
                <Square />
                <Square />
                <Square />
            </div> 
            <div className="board-row -mt-1.5">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
     
}