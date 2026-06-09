import React from 'react'

type Props = {
    children: React.ReactNode
}

const Card = (props: Props) => {
    return (
        <div className="card border border-base-300 p-4 shadow-sm">
            {props.children}
        </div>
    )
}

export default Card