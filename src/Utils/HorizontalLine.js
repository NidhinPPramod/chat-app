import React from 'react'

const HorizontalLine = ({color}) => {
    return (
        <hr
            style={{
                color,
                backgroundColor: color,
                height: 5
            }}
        />
    )
}

export default HorizontalLine
