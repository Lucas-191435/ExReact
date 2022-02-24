import React, { useContext } from 'react';

const GlobalContext = React.createContext();


const GlobalStorage = ({children})=>{
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(()=>{
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
    .then((response)=>response.json()).then((json)=>setProdutos(json));
  },[])

  function limparProdutos(){
    setProdutos(null);
  }

  if(produtos === null) return null

  return(
    <GlobalContext.Provider value={produtos}>
      {children};
    </GlobalContext.Provider>
  )
}

const Produto = ()=>{
  const global = useContext(GlobalContext);

  console.log(global);

  return(
    <>
      Lista de produtos:

      {global.map((produto)=>(
        <h3 key={produto.id}>{produto.nome}</h3>
      ))} 
    </>
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

