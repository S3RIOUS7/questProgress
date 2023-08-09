import '../button/button.scss'

const Button = (props) => {

  const { 
    onClick,
    children,
  } = props
  return(
    <button {...props} className='' onClick={onClick}>{children}</button>
  )
}

export default Button