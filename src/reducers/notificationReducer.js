
const notificationReducer = (state=null, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.notification
    case "CLEAR":
      return action.notification
      
    default:
      return state
  }
}

export const newNotification = (notification) => {
  return {
    type: "NEW_NOTIFICATION",
    notification,
  }
}

export const clearNotification = () => {
  return {
    type: "CLEAR",
    notification: null,
  }
}
export default notificationReducer
