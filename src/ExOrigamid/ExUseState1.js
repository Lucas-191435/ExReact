import React from 'react';


const ExUseState1 = ()=>{

  const [produto, setProduto] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  async function escolheProduto({target}){
    setLoading(true);

    const response = await fetch(url + target.innerText);
    const json = await response.json();
    setProduto(json.nome)

    setLoading(false);
  }

  return(
    <div className="">
      <button onClick={escolheProduto}>tablet</button>{' '}
      <button onClick={escolheProduto}>smartphone</button>{' '}
      <button onClick={escolheProduto}>notebook</button>{' '}

    <br></br>
    <br></br>
      {loading? <div>loading...</div> : <div>{produto}</div>}
    </div>
  )
}


export default ExUseState1;