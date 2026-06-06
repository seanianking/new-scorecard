import React from 'react'

type ButtonTheme = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'neutral'

interface ButtonProps {
    text: string
    theme: ButtonTheme
    onClick: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const themeClasses: Record<ButtonTheme, string> = {
    primary: 'bg-primary text-primary-content hover:bg-primary-focus',
    secondary: 'bg-secondary text-secondary-content hover:bg-secondary-focus',
    success: 'bg-success text-success-content hover:bg-success-focus',
    danger: 'bg-error text-error-content hover:bg-error-focus',
    warning: 'bg-warning text-warning-content hover:bg-warning-focus',
    neutral: 'bg-neutral text-neutral-content hover:bg-neutral-focus',
}

const Button: React.FC<ButtonProps> = ({ text, theme, onClick, disabled = false }) => {
    const classes = `${themeClasses[theme]} rounded-md px-4 py-2 font-semibold transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`

    return (
        <button type="button" onClick={onClick} disabled={disabled} className={classes}>
            {text}
        </button>
    )
}

export default Button
