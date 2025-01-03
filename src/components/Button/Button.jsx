import './button.css';

// eslint-disable-next-line react/prop-types
export default function Button({children, variant = 'primary', className = ''}) {
    return <button className={`btn ${variant} ${className}`}>{children}</button>
}
