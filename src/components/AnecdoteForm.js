import React from "react"
import { connect } from 'react-redux'
import {create} from "../reducers/anecdoteReducer"
import {newNotification} from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ""
    props.create(content)

    props.newNotification(`Anecdote "${content}" added`)
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

const mapDispatchToProps = {
  create,
  newNotification,
}

export default connect(
  null,
  mapDispatchToProps,
)(AnecdoteForm)