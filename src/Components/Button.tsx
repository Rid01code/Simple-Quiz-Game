import React from "react"
import styles from './Button.module.css'

interface buttonProps{
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void
}

const Button:React.FC<buttonProps> = ({children , className , onClick}) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`${styles.Button} ${className || ''}`}
            >
                {children}
            </button>
        </>
    )
}

export default Button