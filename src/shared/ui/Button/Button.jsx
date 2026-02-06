import styles from './Button.module.scss'

const Button = (props) => {
    const {
        children,
        className = '',
        type = 'button',
        isDisabled,
        onClick,
    } = props

    return (
        <button disabled={isDisabled} onClick={onClick} className={`${styles.button} ${className}`} type={type}>{children}</button>
    )
}

export default Button