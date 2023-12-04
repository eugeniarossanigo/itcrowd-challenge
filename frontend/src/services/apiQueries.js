import axios from 'axios'
import apiURL from '../../api'

const base = axios.create({
  baseURL: apiURL
})

export const getAllGuitars = async(query='') =>{
  try {
    const { data } = await base('/api/guitars'+ query)
    return data.response
  } catch (err) {
    return []
  }
}

export const getOneGuitar = async(id) =>{
  try {
    const { data } = await base('/api/guitars/'+ id)
    return data.response
  } catch (err) {
    return {}
  }
}