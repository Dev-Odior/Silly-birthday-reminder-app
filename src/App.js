import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [info, setInfo] = useState(data)

  const onClickHandler = () => {
    setInfo([])
  }

  return (
    <main>
      <section className="container">
        <h3>{info.length} birthdays today</h3>
        <ul>
          {info.map((each) => {
            const { id } = each
            return <List key={id} data={each} />
          })}
        </ul>
        <button onClick={onClickHandler}>Clear All</button>
      </section>
    </main>
  )
}

export default App
