import React, { useContext } from 'react';

const GlobalContext = React.createContext();

const GlobalStorage = ({children})=>{
  const [dados, setDados] = React.useState(null);

  const url = 'https://ranekapi.origamid.dev/json/api/produto'

  React.useEffect(()=>{
    fetch(url).then((response)=> response.json()).then((json)=> setDados(json));
  },[]) 


  function limparDados(){
    setDados(null);
  }

  return(
    <GlobalContext.Provider value={dados}>
      {children}
    </GlobalContext.Provider>
  )
}


const Produto = ()=>{
  const global = React.useContext(GlobalContext);
  
  if(global === null) return null;
  return (
    <div>
      {global.map((produto)=>(
        <h1 key={produto.id}>{produto.nome}</h1>
      ))}
    </div>
  )
}

const Ex3UseContext = ()=>{
  return(
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default Ex3UseContext;

