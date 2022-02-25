import React from 'react';


const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const Ex4Input = ()=>{

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field)=>{
      return ({...acc, [field.id]: ''});
    }, {})
    )


    const [resposta, setResposta] = React.useState(null);

    function handleSubmit(event){
      event.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          // form é o objeto com os dados do formulário
          body: JSON.stringify(form),
        }).then((response)=> setResposta(response));
    }


    function handleChange({target}){
      const {id, value} = target;
      setForm({...form, [id]: value});
      console.log(form)
    }
    
  return(
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type})=>(
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      <button>Enviar</button>
      
      {resposta ? <p>usuario criado</p> : null}
    </form>
  )
}

export default Ex4Input;