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
            id: action.id,
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

      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((item) => item.id !== action.id),
        }

    default:
      return state
  }
}

export default reducer
