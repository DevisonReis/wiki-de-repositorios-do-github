import React from 'react'
import { ItemContainer } from './styles'
import trash from '../../assets/excluir.png';

function ItemRepo({repo, removeRepo}) {
  const handleRemove = () => {
    removeRepo(repo.id)
  }

  return (
    <ItemContainer>
        <div class="container-name-repo">
          <img src={`https://avatars.githubusercontent.com/u/${repo.owner.id}?v=4`} alt='imagem do perfil' className="foto-perfil"/>
          <div class="name-fullname">
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
          </div>
        </div>
        <p>{repo?.description ?? "Sem descrição"}</p>
        <div className="show-remove">
          <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
          <br/>
          <img src={trash} width={25} height={25} alt='excluir repositorio' onClick={handleRemove} className="trash"/>
        </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo
