const BtnIcon = (props) => {
  const classes = `w-11 h-11 p-2.5 rounded-full text-slate-500 hover:bg-slate-200 active:bg-slate-300 duration-200 ${props.className} || ''`

  return <button className={classes.trim()}>{props.children}</button>
}

export default BtnIcon
