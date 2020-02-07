import React from "react"
import { connect } from 'react-redux'
import {vote} from "../reducers/anecdoteReducer"
import {newNotification} from "../reducers/notificationReducer"

const AnecdoteList = (props) => {
  
  const addVote = (id) => {
    props.vote(id)
    props.newNotification("vote added")
  }

  return(
    <div>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => (
  {
    anecdotes: state.anecdotes,
  }
)

const mapDispatchToProps = {
  vote,
  newNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdoteList)