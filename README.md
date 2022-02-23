## Lista de exercícios 

Antes de começar tenho que saber criar o ambiente 

O mais fácil é por: npx create-react-app nome

**| useState**

```
`// Os links abaixo puxam dados de um produto em formato JSON`
`// https://ranekapi.origamid.dev/json/api/produto/tablet`
`// https://ranekapi.origamid.dev/json/api/produto/smartphone`
`// https://ranekapi.origamid.dev/json/api/produto/notebook`
`// Crie uma interface com 3 botões, um para cada produto.`
`// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.`
`// Mostre apenas um produto por vez`
`// Mostre a mensagem carregando... enquanto o fetch é realizado`
```

**Explicação:** 



**| useEffect**

```
`// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo`
`// https://ranekapi.origamid.dev/json/api/produto/notebook`
`// https://ranekapi.origamid.dev/json/api/produto/smartphone`
`// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)`
`// Defina o produto clicado como uma preferência do usuário no localStorage`
`// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
```

`Explicação: 



**| useRef**

 Ver video 

**| useContext**

```
`// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:`
`// https://ranekapi.origamid.dev/json/api/produto/`
`// assim que o usuário acessar o app`
`// coloque os dados da API no contexto global, dando acesso aos dados da mesma`
`// defina uma função chamada limparDados que é responsável por zerar os dados de produto`
`// e exponha essa função no contexto global
```

`Explicação:



**| input**

```
`// Faça um fetch (POST) para a API abaixo`
`// Para a criação ser aceita é necessário enviar dodos de:`
`// nome, email, senha, cep, rua, numero, bairro, cidade e estado`

`// Essa é a função utilizado para realizar o POST`
`fetch('https://ranekapi.origamid.dev/json/api/usuario', {`
  `method: 'POST',`
  `headers: {`
    `'Content-Type': 'application/json',`
  `},`
  `// form é o objeto com os dados do formulário`
  `body: JSON.stringify(form),`
`});`

`// Mostre uma mensagem na tela, caso a resposta da API seja positiva`
```

Explicação:

1 - Criar um array de objetos chamado formFields, com os atributos para criar o input

2 - Vou criar um state, chamado form. E seu valor iniciar vai ser um objeto, que vou criar na hora utilizando formFields e reduce, as propriedades vai ser o id.

3 - vou criar um state para o retorno do meu POST, true ou false.

4 - uma function chamada handleSubmit, que vai ser acionada quando enviar os dados. E é nela que vou ter o fetch com o objeto que faz o POST.

5 - função handleChange que vai ser para todos os input, nela vou descontruir o id e value, para alterar o valar do objeto form.

6 - Vou criar um formulario, e para criar os input vou usar o formFields. 
O formulario vai ter uma bottão, e um elemento que só apararece se a receber a resposta da API.



**| textArea**



**| select**

Criar uma seleção de produto:

```jsx
const App = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

```

Explicação: 

**| Radio**

     const App = () => {
      const [produto, setProduto] = React.useState('');
      const [cor, setCor] = React.useState('');
    
      return (
        <form>
          <h2>Dispositivo</h2>
          <label>
            <input
              name="dispositivo"
              type="radio"
              value="notebook"
              checked={produto === 'notebook'}
              onChange={({ target }) => setProduto(target.value)}
            />
            Notebook
          </label>
          <h2>Cor</h2>
          <label>
            <input
              name="cor"
              type="radio"
              value="azul"
              checked={cor === 'azul'}
              onChange={({ target }) => setCor(target.value)}
            />
            Azul
          </label>
        </form>
      );
    };
      );
    };




- Ver vídeo 

**| Checkbox**

```
`// Otimize o código do slide anterior`
`// Utilizando a array abaixo para mostrar`
`// cada checkbox na tela.`

`const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];`
```

Explicação: 

1 - criar um array coresArray para os input.
2 - criar um state cores, com valor iniciar que é um array.
3 - Crio uma função chamada handleChange, nela adiciono uma nova cor em cores, e removo utilizando filter que retorna uma nova cor.
4 - Crio a função handleChecked, que vai verificar se existe a cor no array
5 - Crio os campos de checked. com a mesma estrutura de radio.



**| Componentes input**

- Criar componente input e chamar ele no app. Já passando os dados. 

**| Componentes Radio**

O Exercicio é criar um componente chamado Radio, e que passo um atributo, um array, e para cada item, cria um input como normalmente.

- ```
  const Radio = ({value, options, setValue})=>{
  
    return (
      <>
      {options.map((cor)=>(
        <label key={cor}>
          <input 
          type='radio'
          value={cor}
          checked={value === cor}
          onChange={({target})=> setValue(target.value)}
          />
          {cor}
        </label>
      ))}
      </>
    ) 
  }
  ```

  

**| Componentes Checkbox**

O Exercicio é criar um componente chamado Checkbox, e que você passo como um atributo, um array, e para cada item, cria um input como normalmente, e com a função  para verificar se o item tá check ou não. 

```
 function handleChange({*target*}){

  if(*target*.checked){

   setValue([...*value*, *target*.value]);

  }else{

   setValue(*value*.filter((*cor*)=> *cor* !== *target*.value));

  }
```

- 1 - state que vai ser um array
  2 - chamar o componete passando os atributos. option, setValue e value
  3 - criar o componete usando map. 
  4 - Criar a função que incluie e muda o array

  



**| Componentes Select**

- Ver video

**| Validação**

- Ver video

**| Router**

1 - Instalar router com "npm install history react-router-dom@6.0.0-beta.0"

2 - Em app, usar o BrowserRouter, Routes e Route com path e element

3 - Criar os element home, sobre e Header

4 - Header vai ter que ter o link para cada página

5 - Criar a página produto, e para acessar ela vou usar um link dinâmico, para notebook e smarthphone

6 - Dentro de Produto/:id, vou ter uma rota para ProdutoAvaliacao e ProdutoDescricao;

**| Link**

- Ver video

**| useParams**

- Ver video

**| Nested Routes**

- Ver video 

**| Head**

- Ver video

**| Desafio Formulário**

1  - Criar um array chamado perguntas para as perguntas, as propriedades do objeto vão ser pergunta, options, resposta e id.

2 - Criar um state respostas, que é um objeto e nele eu guardo minhas opções;

3 - criar um state para o slide que começa no 0.

4 - criar um state para a resultado

5 - criar a função handleChange, que vai colocar a opção escolhida no objeto respostas.

6 - Criar a função resultadoFinal, nela vou filtrar as respostas comparando com a propriedade do array perguntas.

7 - Criar a função handleClick, que serve para mudar o slide. 

8 - Fazer o formulário prevendo o evento padão e chamar o componente radio, para cada uma das minhas perguntas. Os atributos que tenho que passar é active, key, value, onChange e pergunta. Resultado aparece se for true, e o btn chama handleClick

9 - No componente radio pego os atributos que passei, pergunta, options, onChange, value, id e active, alguns tenho acessso por desestrutura pergunta, vou verificar se active é falso

10 - criar o elemeto fieldset para envolver a minha pergunta, e deixo a pergunta no elemento legend, então usando options crio as alternativas.

**| Desafio Router**
