const DropdownColors = (props) => {
  const colorOptions = [
    { value: 'bg-slate-300', text: 'text-slate-300' },
    { value: 'bg-amber-300', text: 'text-amber-500' },
    { value: 'bg-emerald-300', text: 'text-emerald-500' },
    { value: 'bg-blue-300', text: 'text-blue-500' },
    { value: 'bg-purple-300', text: 'text-purple-500' },
    { value: 'bg-rose-300', text: 'text-rose-500' },
  ]

  return (
    <div className="flex gap-1 px-1 py-2">
      {colorOptions.map((item) => (
        <div key={item.value}>
          <button
            onClick={props.onClick}
            value={item.value}
            className="flex items-center hover:bg-sky-800 rounded-full duration-200"
          >
            <span className={`material-symbols-rounded ${item.text}`}>
              circle
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default DropdownColors
