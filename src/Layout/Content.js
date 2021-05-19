import React from 'react'

export default function Content(props) {
    return (
        <div className="mx-auto w-11/12 pt-4 flex-1">
            {props.children}
        </div>
    )
}
