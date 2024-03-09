import React, { useState } from "react"

export default function Player({ initialName, symbol, nameContent = "div", ...props }) {

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)

    function handleClickEdit() {
        setIsEditing(prev => !prev)
    }

    function handleChangeName(value) {
        setName(value)
    }

    let playerName = <span {...props}>{name}</span>

    if (isEditing) {
        playerName = <input placeholder="Nuevo nombre" defaultValue={initialName} onChange={(e) => handleChangeName(e.target.value)} />
    }

    return (
        <nameContent>
            {playerName}
            <button onClick={handleClickEdit}>{isEditing ? "Guardar" : "Editar"}</button>
        </nameContent>
    )
}