const Button = (props) => {
  const classes = `duration-200 ${props.className} || ''`

  return <button className={classes.trim()} onClick={props.onClick}>{props.children}</button>
}

export default Button
