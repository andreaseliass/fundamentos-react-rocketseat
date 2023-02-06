import { Post } from "./Post"
import './global.css'
import { Header } from "./components/header"

import styles from './App.module.css'

import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
      <Post
        author="Andrea Elias"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sunt beatae molestiae dolorem ducimus consequatur odit aliquid esse magni corporis accusamus quidem, unde, maxime sint consectetur iusto numquam distinctio amet!"
      />
      <Post
        author="Pituca Elias"
        content="Um novo post muito legal."
      />
      </main>
    </div>
    </div>
    
  )
}

