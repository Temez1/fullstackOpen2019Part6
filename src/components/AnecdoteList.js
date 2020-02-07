import React from "react"
import {vote} from "../reducers/anecdoteReducer"
import {addNotification} from "../components/Notification"

const AnecdoteList = ({store}) => {
  const anecdotes = store.getState().anecdotes
  
  const addVote = (id) => {
    store.dispatch(vote(id))
    addNotification(store, "vote added")
  }

  return(
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList