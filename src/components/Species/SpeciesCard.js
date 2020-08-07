import React from 'react'

const SpeciesCard = ({info}) => {
  console.log(info)
  
  const jsx = info ?  info.map((el, index) => (
      <div key={index}>
        <h3>{el.name}</h3>
      </div>
    )) : null
  
  
  return(
    
      <div>{jsx}</div>
    )
}


export default SpeciesCard