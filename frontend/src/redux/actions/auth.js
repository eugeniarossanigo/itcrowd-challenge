import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiURL from '../../../api'
import { v4 as uuidv4 } from 'uuid';

export const signup = createAsyncThunk('signup', async(payload) => {
  try {
    console.log("acáaaaaa")
    const body = {...payload, id_user: uuidv4().slice(0, 18), role: false}
    const user = await axios.post(apiURL + '/api/auth/signup', body)
    .then(response => {
       return response.data.response
    })
    return user
  } catch (error) {
    console.log(error)
  }
})

export const signin = createAsyncThunk('signin', async(payload) => {
  try {
    const user = await axios.post(apiURL + '/api/auth/signin', payload)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      return response.data.response
    })
    return user
  } catch (error) {
    console.log(error)
  }
})

export const authentication = createAsyncThunk('authentication', async() => {
  try {
    let token = localStorage.getItem('token')
    const user = await axios.post(apiURL + '/api/auth/token', null, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      console.log("authenticated successfully")
      localStorage.setItem('token', response.data.token)
      return response.data.response
    })
    return user
  } catch (error) {
    console.log(error)
  }
})

export const signout = createAsyncThunk('signout', async(payload) => {
  try {
    localStorage.removeItem('token')
    console.log("entré al signout")
    await axios.post(apiURL + '/api/auth/signout', payload)
    .then(res => console.log(res.data))
    return null
  } catch (error) {
    console.log(error)
  }
})
