import React, { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import axios from "axios";

// const baseURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
const baseURL = "https://pokeapi.co/api/v2/pokemon/charmeleon";

export default function App() {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response)=> {
      console.log(response);
      setPost(response.data)
    });
  }, [])

  if(!post)return null

  return(
    <>
      {/* <img src={post.sprites.back_shiny} alt={post.name} />
      <img src={post.sprites.front_shiny} alt={post.name} />
      <img src={post.sprites.front_shiny} alt={post.name} />
      <p>Nombre: {post.name}</p>
      <p>Altura: {post.height}0 cm</p>
      <p>Peso: {post.weight} Lb</p> */}
      {/* <p>Tipo: {post.types[0].type.name}</p> */}
      {/* <p>Tipo: {post.types.map((type) => type.type.name).join("")}</p> */}


      <img src={post.sprites.back_shiny} alt={post.name} />
      <p>Nombre: {post.name}</p>
      <p>Altura: {post.height}0 cm</p>
      <p>Peso: {post.weight} Lb</p>
      <p>Tipo: {post.types[0].type.name}</p>
    </>
  )
}
