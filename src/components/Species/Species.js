import React from 'react'
import DataFetcher from '../DataFetcher'
import SpeciesCard from './SpeciesCard'

const Species = () => {
  
  return(
    <DataFetcher url="https://swapi.dev/api/species/?page=1">
      
    {
      
      ({data, loading}) => (
        loading ?
        <h1>Loading ...</h1> :
        <SpeciesCard info={data}/>
      )
    }
  </DataFetcher>
  )
}


export default Species