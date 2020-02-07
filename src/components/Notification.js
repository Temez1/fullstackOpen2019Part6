import React from 'react'
import {newNotification, clearNotification} from "../reducers/notificationReducer"

export const addNotification = (store, message, timeoutInMilliseconds=5000) => {
  store.dispatch(newNotification(message))
  setTimeout( () => {
    store.dispatch(clearNotification())
  }, timeoutInMilliseconds)
}

const Notification = ({store}) => {
  if (store.getState().notification === null) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      { store.getState().notification }
    </div>
  )
}

export default Notification