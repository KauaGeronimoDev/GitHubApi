import {useState} from 'react'
import axios from 'axios'
import './App.css'

type GithubData = {
  name: string
  bio: string
  avatar_url: string
}

function App() {
  const defaultAvatar = 'https://cdn-icons-png.flaticon.com/256/5556/5556468.png';
  const [avata_url, setAvataURL] = useState(defaultAvatar)
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [username, setUsername] = useState("")

const handlePesquisar = () => {
axios.get<GithubData>(`https://api.github.com/users/${username}`). then ((response) => 
{setName(response.data.name) 
setBio(response.data.bio) 
setAvataURL(response.data.avatar_url ) 
})
}

  return (
    <>
      <header className="header">
        <h1>Busca Perfil</h1>
      </header>
      <main>
        <div className="mae">
          <div className="consulta">
            <input type="text" placeholder="Digite o usuário" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handlePesquisar}>Buscar</button>
          </div>

          <div className="resultado">
            <img src={avata_url} alt="" />
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
