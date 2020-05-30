import axios from 'axios'

export async function getArticles() {
  return axios.get('http://localhost:3000/articles')
}

export async function postArticle({title, description, markdown}) {
  return axios.post('http://localhost:3000/articles', { title, description, markdown })
}

export async function deleteArticle(id) {
  return axios.delete(`http://localhost:3000/articles/${id}`)
}