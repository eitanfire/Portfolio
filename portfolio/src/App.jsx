import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1 className="title">My Latest Projects</h1>
      <section>
        <h2>🚀 Teach League</h2>
        <a
          href="https://teach-league.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          link
        </a>
      </section>
      <section>
        <h2>👨🏻‍🏫 Class Website</h2>
        <a href="https://eitans.website/" target="_blank" rel="noreferrer">
          link
        </a>
      </section>
      <section>
        <h2>👻 Costume Contest Scoreboard</h2>
        <a href="" target="_blank" rel="noreferrer">
          link
        </a>
      </section>
    </>
  );
}

export default App
