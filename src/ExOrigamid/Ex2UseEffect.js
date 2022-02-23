import React, { useEffect } from 'react';


const Ex2UseEffect = ()=>{
  const [produto, setProduto] = React.useState(null);

  useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto');
    if(produtoLocal !== "null") setProduto(produtoLocal);
  }, []);

  useEffect(()=>{
    if(produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto])

  function handleClick({target}){
    setProduto(target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>tablet</button>{' '}
      <button onClick={handleClick}>smartphone</button>{' '}
      <button onClick={handleClick}>notebook</button>{' '}

      <Produto produto={produto} />
    </div>
  )
}

export default Ex2UseEffect;

const Produto = ({produto})=>{
  const [dados, setDados] = React.useState(null);
 
  useEffect(()=>{
    if(produto !== null){
      const url = 'https://ranekapi.origamid.dev/json/api/produto/' + produto;
      fetch(url).then((response)=>response.json()).then((json)=> setDados(json));
    }

  }, [produto])

  if (dados === null) return null;

  return(
    <div>
     <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </div>
  )
}