const initialState = {
  notes: [],
  label: [
    { name: 'work', checked: false },
    { name: 'todo', checked: false },
    { name: 'test', checked: false },
  ],
  noteChangedColor: [],
  backdrop: false,
  modal: false,
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

    case 'CHANGE_COLOR':
      const note = state.notes.filter((item) => item.id === action.id)
      const noteChanged = note.map((item) => {
        return {
          id: item.id,
          title: item.title,
          text: item.text,
          color: action.color,
          label: item.label,
        }
      })

      const noteList = state.notes.map((item) => {
        if (item.id === action.id) {
          return noteChanged[0]
        } else {
          return item
        }
      })

      return {
        ...state,
        notes: noteList,
      }

    case 'EDIT_NOTE':
      const noteSelected = state.notes
        .filter((item) => item.id === action.id)
        .map(() => {
          return {
            id: action.id,
            title: action.title,
            text: action.text,
            color: action.color,
            label: action.label,
          }
        })

      const noteListUpdated = state.notes.map((item) => {
        if (item.id === action.id) {
          return noteSelected[0]
        } else {
          return item
        }
      })

      return {
        ...state,
        notes: noteListUpdated,
      }

    case 'BACKDROP':
      return {
        ...state,
        backdrop: !state.backdrop,
      }

    case 'MODAL':
      return {
        ...state,
        modal: !state.modal,
      }

    default:
      return state
  }
}

export default reducer
