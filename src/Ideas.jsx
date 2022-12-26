import React from 'react'
import { Cards } from './Cards'

export const Ideas = ({ ideas, deleteIdea }) => {
  const getIdeas = ideas.map((idea) => (
    <Cards ideas={idea} key={idea.id} id={idea.id} deleteIdea={deleteIdea} />
  ))
  return (
    <div className='ideas-container'>
      {getIdeas}
    </div>
  )
}
