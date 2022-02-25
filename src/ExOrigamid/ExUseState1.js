import React from 'react';


const ExUseState1 = ()=>{
  const [produto, setProuto] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  function fetchProduto({target}){
    fetch(url + target.innerText)
    .then((response)=> response.json()).then((json)=>setProuto(json));
  }

  
  if(loading) return <p className='loading'></p>;
  
  return(
    <div>
      <ul>
        <li><button onClick={fetchProduto}>tablet</button></li>
        <li><button onClick={fetchProduto}>notebook</button></li>
        <li><button onClick={fetchProduto}>smartphone</button></li>
      </ul>

      {produto ? <h1>{produto.nome}</h1> : null}
    </div>
  )
}


export default ExUseState1;