import React from 'react'

function Button({ className = '', text = "View", background = "bg-primary-golden", text_Color = "text-background-dark", shadow = true, stroke = false, ...props }) {
    return (
        <button {...props} className={`${className} ${background} ${text_Color} p-4 rounded-2xl ${shadow ? 'shadow-[0px_2px_30px_-13px_var(--color-accent-amber,#FF8A00)]' : null} ${stroke ? 'stroke-accent-amber' : null} font-bold `} >{text}</button>
    )
}

export default Button