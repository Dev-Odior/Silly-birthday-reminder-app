import React from 'react'

const List = ({ data }) => {
  const { name, age, image } = data
  return (
    <li className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </li>
  )
}

export default List
