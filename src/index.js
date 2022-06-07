import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
 
const App = () => {
  const course = 'Web languages'
  const part1 = [{
    key:1,
    name: 'Introduction to React',
    exercises: 10
  },
  {
    key:2,
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    key:3,
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <h1>{course}</h1>
      <Hello array={part1}/>
    </div>
  )
}

const Hello = (props) =>{
  return(
    <div>
      <table>
        <tr>
          {props.array.map(item1 =>(
            <td key={item1.key}>{item1.name}</td>
          ))}
          {props.array.map(item2 =>(
            <td key={item2.key}>{item2.exercises}</td>
          ))}
        </tr>
      </table>
    </div>
  )
}


root.render(<App />)