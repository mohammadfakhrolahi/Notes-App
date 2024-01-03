import React from 'react'

const Badge = (props) => {
  const classes = `inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer bg-slate-50/50 
  text-slate-700 ring-1 ring-inset ring-slate-700/10 ${props.className} || ''`

  return <span className={classes}>{props.children}</span>
}

export default Badge
