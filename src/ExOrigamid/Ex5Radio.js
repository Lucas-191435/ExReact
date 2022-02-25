import React from 'react';

const Ex5Radio = ()=>{
  const [cor, setCor] = React.useState('');
  const [genero, setGenero] = React.useState('');
  const [idade, setIdade] = React.useState('');

  const aCor = ['branco', 'preto', 'amarelo'];
  const aGenero = ['masculino', 'Feminino', 'Não se identifica'];
  const aIdade = ['criança', 'Adulto', 'Senhor/a'];

  return (
    <div>
     <Radio options={aCor} value={cor} setValue={setCor} />
     <br></br>
     <Radio options={aGenero} value={genero} setValue={setGenero} />
     <br></br>
     <Radio options={aIdade} value={idade} setValue={setIdade} />
     <br></br>
    </div>
  )
}
export default Ex5Radio;

const Radio = ({options, value, setValue})=>{
  return(
    <ul>
      {options.map((option)=>(
        <li key={option}>
          <label>
            <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={({target})=> setValue(option)} />
            {option}
          </label>
        </li>
      ))}
    </ul>
  )
}