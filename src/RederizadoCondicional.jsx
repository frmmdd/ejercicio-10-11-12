import React, { useState, useEffect } from 'react'
import './RederizadoCondicional.css'

const styleNoOver = {
    background: 'black'
}

let styleOver = {
    background: 'rgb(0, 0, 0)'
}

const Square = () => {
    const [overColor, setOverColor] = useState(false)
    const [colors, setColors] = useState([0, 0, 0])
    let backgroungStyle

    useEffect(() => {
        const interval = setInterval(() => {
            setColors(
                [Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)]
            )
        }, 1000);
        if (!overColor) clearInterval(interval)
        return () => clearInterval(interval);
    }, [overColor]);

    styleOver = {
        background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
    }

    if (overColor) {
        backgroungStyle = styleOver
    } else {
        if (!overColor) {
            backgroungStyle = styleOver
        }
    }

    function onMouseUpdate() {
        setOverColor(true)
    }

    function onMouseLeave() {
        setOverColor(false)
    }

    function handleDoubleClick() {
        setOverColor(false)
    }

    return (
        <div className='square' style={backgroungStyle}
            onDoubleClick={handleDoubleClick} onMouseOver={onMouseUpdate}
            onMouseLeave={onMouseLeave}
        ></div>
    )
}

const Rectangle = () => {
    const [overColor, setOverColor] = useState(false)
    const [colors, setColors] = useState([0, 0, 0])
    let backgroungStyle

    useEffect(() => {
        const interval = setInterval(() => {
            setColors(
                [Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)]
            )
        }, 1000);
        if (!overColor) clearInterval(interval)
        return () => clearInterval(interval);
    }, [overColor]);

    styleOver = {
        background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
    }

    if (overColor) {
        backgroungStyle = styleOver
    } else {
        if (!overColor) {
            backgroungStyle = styleOver
        }
    }

    function onMouseUpdate() {
        setOverColor(true)
    }

    function onMouseLeave() {
        setOverColor(false)
    }

    function handleDoubleClick() {
        setOverColor(false)
    }


    return (
        <div className='retangle' style={backgroungStyle}
            onDoubleClick={handleDoubleClick} onMouseOver={onMouseUpdate}
            onMouseLeave={onMouseLeave}
        ></div>
    )
}

const RederizadoCondicional = () => {
    const [eventDraw, setEventDraw] = useState(true)
    let optionalDraw

    if (eventDraw) {
        optionalDraw = <Square />
    } else {
        optionalDraw = <Rectangle />
    }


    return (
        <div>
            <button onClick={() => setEventDraw(!eventDraw)}>
                {eventDraw === true ? 'Channge Rectangle' : 'Change Square'}
            </button>
            {optionalDraw}
        </div>
    )
}

export default RederizadoCondicional