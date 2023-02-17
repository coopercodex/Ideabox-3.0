import './App.css';
import { useState, useEffect } from 'react';
import { Ideas } from './Ideas';
import { Form } from './Form';

function App() {
  const [ideas, setIdeas] = useState([
    // {id: 1, title: 'Sweaters for pugs', description: 'To keep them warm'},
    // {id: 2, title: 'A romcom', description: 'But make it ghosts'},
    // {id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'},
  ])

  useEffect(() => {
    getData()
  }, []) 

  const addIdea = (newIdea) => {
      setIdeas([...ideas, newIdea])
  }

  const deleteIdea = (id) => {
    const filterIdeas = ideas.filter(idea => idea.id !== id)
    fetch(`http://localhost:3001/api/v1/ideas/${id}`, {
      method: 'DELETE',
    })
    .then(() => setIdeas(filterIdeas))
  }
  
  const getData = () => {
    fetch('http://localhost:3001/api/v1/ideas')
    .then(res => res.json())
    .then((data => {
      setIdeas(data)
    }))
  }

  const addData = (newIdea) => {
    fetch('http://localhost:3001/api/v1/ideas', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newIdea)
  })
  .then(res => res.json())
  .then(res => setIdeas([...ideas, res]))
}

  // console.log(ideas)
  return (
    <div className="App">
      <h1>IdeaBox</h1>
    <Form addIdea={addIdea} addData={addData} />
    <Ideas ideas={ideas} deleteIdea={deleteIdea} />
    </div>
  );
}

export default App;
