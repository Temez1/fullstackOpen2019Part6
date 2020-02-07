import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0}
  const response = await axios.post(url, object)
  return response.data
}

const addVote = async (id) => {
  const anecdotes = await getAll()
  const anecdote = anecdotes.find(anecdote => anecdote.id === id)
  anecdote.votes += 1
  const response = await axios.put(`${url}/${id}`, anecdote)
  return response.data
}
export default { getAll, createNew, addVote }