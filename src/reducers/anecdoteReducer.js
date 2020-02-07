import anecdoteService from "../services/anecdotes"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const anecdote = state.find(anecdote => anecdote.id === action.data.id)
      const changedAnecdote = {...anecdote, votes: anecdote.votes + 1}
      return state.map(anecdote => anecdote.id !== action.data.id ? anecdote : changedAnecdote)
    case "CREATE":
      return [...state, action.data]
    case "INIT_ANECDOTES":
      return action.data

    default: return state
  }
}

export const vote = (id) => {
  return async dispatch => {
    const data = await anecdoteService.addVote(id)
    dispatch({
      type: "VOTE",
      data
    })
  }
}

export const create = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: "CREATE",
      data: newAnecdote
    })
  }
}

export const initalizeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}

export default reducer