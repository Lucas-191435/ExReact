import React, { useEffect } from 'react';


const Ex2UseEffect = ()=>{
  const [produto, setProduto] = React.useState(null);
  React.useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== null) setProduto(produtoLocal);
  },[])

  React.useEffect(()=>{
    window.localStorage.setItem('produto', produto);
  }, [produto]);


  function handleChange({target}){
    setProduto(target.innerText);
  }

  return(
    <div>
      <ul>
        <li><button onClick={handleChange}>tablet</button></li>
        <li><button onClick={handleChange}>notebook</button></li>
        <li><button onClick={handleChange}>smartphone</button></li>
      </ul>

      <Produto produto={produto} />
    </div>
  )
}


const Produto = ({produto})=>{
  const [dados, setDados] = React.useState(null);

  React.useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/' + produto)
    .then((response)=> response.json()).then((json)=>setDados(json));
  },[produto]);

  if(dados === null) return null;

  return(
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <p>{dados.descricao}</p>
    </div>
  )
}

export default Ex2UseEffect;