import React from 'react'

const SpeciesCard = ({info}) => {
  console.log(info)

  const jsx = info ?  info.map((el, index) => (
      <div key={index}>
        <h3>{el.name}</h3>
        <p><b>Classification: </b> {el.classification}</p>
        <p><b>Designation: </b> {el.designation}</p>
        <hr />
      </div>
    )) : null
  
  
  return(
    
      <div>{jsx}</div>
    )
}


export default SpeciesCard