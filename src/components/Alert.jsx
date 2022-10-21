import React from 'react'

const Alert = (props) => {
    return (
        <>
            {
                props.alert && <div className={`${props.alert.clr} border border-${props.alert.clr}-300 text-white px-4 py-3 text-center`}>
                    <strong className="font-bold">{props.alert.msg}</strong>
                </div>
            }
        </>
    )
}

export default Alert