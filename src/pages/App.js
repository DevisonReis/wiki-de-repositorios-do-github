import { useState } from 'react';
import gitHubLogo from '../assets/github-logo.png';
import Input from '../components/input';
import Button from '../components/button';
import ItemRepo from '../components/itemrepo';
import { api } from '../services/api';


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repo, setRepo] = useState([]);

  const searchRepo = async () => {
    const {data} = await api.get(`/repos/${currentRepo}`)
    if (data.id) {
      const isExist = repo.find(repo => repo.id === data.id)
      if (!isExist) {
        setRepo(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado.')
  }

  const removeRepo = (id) => {
    const isDelete = repo.filter(repo => repo.id !== id)
    setRepo(isDelete)
  }

  return (
    <Container>
      <img src={gitHubLogo} width={75} height={75} alt="Logotipo do github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={searchRepo}/>
      {repo.map(repo => <ItemRepo removeRepo={removeRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
