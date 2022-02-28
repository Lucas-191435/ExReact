import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const ProjetoForm = ()=>{
  const [repostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function resultadoFinal(){
    const corretas = perguntas.filter(
      ({id, resposta})=> resposta === repostas[id]
    )
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleChange({target}){
    setRespostas({...resultado, [target.id]: target.value});
  }

  function handleClick(){
    if(slide < perguntas.length - 1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal();
    }
  }
  return(
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index)=>(
        <Radio 
        key={pergunta.id}
        value={repostas[pergunta.id]}
        onChange={handleChange}
        active={slide === index}
        {...pergunta}
        />
      ))}

      {resultado ? (<p>{resultado}</p>) : (<button onClick={handleClick}>Proximo</button>)}
    </form>
  );
}


const Radio = ({value, onChange, active, pergunta, id, options})=>{
  if(active === false) return null;
  return(
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option)=>(
        <label key={option}>
          <input 
          type='radio'
          value={option}
          onChange={onChange}
          id={id}
          checked={value === option} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}



export default ProjetoForm;
