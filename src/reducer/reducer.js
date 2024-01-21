const initialState = {
  notes: [],
  label: [
    { name: 'work', checked: false },
    { name: 'todo', checked: false },
    { name: 'test', checked: false },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.titleValue,
            text: action.noteValue,
            color: action.colorValue,
            label: action.labelValue,
          },
        ],
      }

    case 'CHECKBOX':
      return {
        ...state,
        label: action.label,
      }

    case 'CHECKBOXRESET':
      return {
        ...state,
        label: [
          { name: 'work', checked: false },
          { name: 'todo', checked: false },
          { name: 'test', checked: false },
        ],
      }

    default:
      return state
  }
}

export default reducer
