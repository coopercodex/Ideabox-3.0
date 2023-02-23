import React from 'react'

export const Cards = ({ideas, deleteIdea, id}) => {
  return (
    <div className='card'>
      <h3>{ideas.title}</h3>
      <p>{ideas.description}</p>
      <button className='trash-button' onClick={() => {deleteIdea(ideas.id)}}>Trash</button>
    </div>
  )
}
