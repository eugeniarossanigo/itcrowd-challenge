import { createContext, useState, useEffect } from 'react'
import { getAllGuitars } from '../services/apiQueries'
import { v4 as uuidv4 } from 'uuid';

export const GuitarContext = createContext()

export default function GuitarContextProvider(props) {
  const [products, setProducts] = useState([])
  const [input, setInput] = useState('')

  const updateInput = (newInput) => {
    setInput(newInput);
  };
  
  // onChange={findParam}>

  // const createGuitar = (guitar) => {
  //   setProducts([...products, {...guitar, id_guitar: uuidv4().slice(0, 18)}])
  // }

  // const deleteGuitar = (id) => {
  //   const newProducts = products.filter(el => el.id_guitar !== id)
  //   setProducts(newProducts)
  // }

  // const updateGuitar = (id) => {
  //   const newProducts = products.filter(el => el.id_guitar !== id)
  //   setProducts(newProducts)
  // }

  useEffect(() => {
    getAllGuitars('?name='+ input)
      .then(res => {
        console.log(res)
        setProducts(res)
      })
      .catch(err => console.log(err))
  }, [input]);

  return (
    // <GuitarContext.Provider value={{products, createGuitar, deleteGuitar, updateGuitar}}>
    <GuitarContext.Provider value={{products, input, updateInput}}>
      {props.children}
    </GuitarContext.Provider>
  )
}
