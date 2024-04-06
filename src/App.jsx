import { useState } from 'react'
import Formulario from './components/Formulario'
import Perfil from './components/Perfil'
import ReposList from './components/RepoList'



function App() {

  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUser, setNomeUser] = useState('');

  return (
    <>
    
    <input type="text" onBlur={(e) => setNomeUser(e.target.value)} placeholder='Informe o nome de usuário'/>

    {nomeUser.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUser}/>
        <ReposList userName={nomeUser} />
      </>
    )}
    {/* {
      formularioVisivel && (
        <Formulario />  
      )
    }
    
    <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>toggle form</button>
     */}
    </>
  )
}

export default App
