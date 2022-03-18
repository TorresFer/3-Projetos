// Criando um Contador com React -> Utilizando JS e o JSX com Babbel para criar elementos React

const container = document.querySelector("#App")  //Selecionado o link através de um container

function App(props) {

    const [contagem, setContagem] = React.useState(0)

    function increment() {   //Função arrow n precisa de "return" ou chaves a mais
        setContagem(anterior => anterior + 1)
    }

    function decrement() {
        setContagem(anterior => anterior - 1)
    }

return(<div className="contador">
    <h2>{props.title}</h2>
    <h3>{contagem}</h3>
    <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
</div>)

}

ReactDOM.render(
    //React.createElement(App, {title: "Contador Novo"}, null)
    <App title="Contador"></App>
    ,container)