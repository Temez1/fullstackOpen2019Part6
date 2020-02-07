import React from "react"
import {create} from "../reducers/anecdoteReducer"
import {addNotification} from "../components/Notification"

const AnecdoteForm = ({store}) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(create(event.target.content.value))
    addNotification(store, `Anecdote "${event.target.content.value}" added`)
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" /></div>
        <button type="submit"> create </button>
      </form>
    </div>
  )
}

export default AnecdoteForm