import React, { useState } from "react"

export default function GameBoard() {
    
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    

    const [gameBoard, setGameBoard] = useState()
    return (
        <ol className="ol">
           {initialGameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                    {row.map((playerSymbol, colindex) => (
                        <li key={colindex}>
                            <button>{playerSymbol}</button>
                        </li>

                    ))}
            </li>
           ))}
        </ol>
    )
}