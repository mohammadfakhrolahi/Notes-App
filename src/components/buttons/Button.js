const Button = (props) => {
  const classes = `duration-200 ${props.className} || ''`

  return <button className={classes.trim()}>{props.children}</button>
}

export default Button
