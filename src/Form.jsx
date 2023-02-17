import React, { useState } from 'react'

export const Form = ({addIdea, addData}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const addNewIdea = 'Add Another Idea';
  const firstLetter = (addNewIdea.slice(0,2));
  const lastLetter = (addNewIdea.slice(2, addNewIdea.length))

  const handleChange = (e) => {
    e.preventDefault();
    const newIdea = ({id: Date.now(), title, description})
    addIdea(newIdea)
    addData(newIdea)
      setLoading(true)
    setSubmitted(true)
    setTimeout(() => setLoading(false), 2500)
    clearInputs()
  }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true)
  //   setSubmitted(true)
  //   setTimeout(() => setLoading(false), 2500)
  // }

  const clearInputs = () => {
    setTitle('')
    setDescription('')  
    // setSubmitted(false)
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input 
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onClick={clearInputs}
        />
        <input 
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
        <button>Submit</button>
        </form>
      {/* <h2>The Chosen Name</h2> */}
      {!loading ? 
      <p>{submitted ? <p className='name'><span className='first'>{firstLetter}</span><span className='last'>{lastLetter}</span></p> : null}</p> : <img className="loader" src='https://i.pinimg.com/originals/74/bc/5c/74bc5c25eb8a960229f43545854aabdd.gif' alt=''/>
    } 
    </div>
  )
}
