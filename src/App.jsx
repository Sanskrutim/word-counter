import { useState } from 'react'

import './App.css'

function App() {
  const [words, setwords] = useState("")
  const wordCount = words.split(/\s+/).filter(word => word).length;

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-full h-screen grid justify-items-stretch ">
      <br></br>
      <h1 className="text-4xl align-top">Responsive Pragraph Word <br></br> Counter</h1>
      <textarea 
      className=" p-2 mt-8 border rounded-md border-black ml-8 mr-8 " 
      rows="6" 
      placeholder="Type your text here..."
      value={words} 
      onChange={e => setwords(e.target.value)} 
      />
      <br></br>
      <p className="text-lg justify-self-start">Word count: {wordCount}</p>
    </div>
      
    
  )
}

export default App
