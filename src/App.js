import './App.css';
import broom from './assets/broom.png';

function App() {
    return (
        <div className="main-content-wrapper">
            <header>
                <h1>Tarefinhas React</h1>
            </header>

            <div className="card-container">
                <form>
                    <input className="checkbox__all" type="checkbox" />
                    <input className="input__task" placeholder="O que precisa ser feito?" aria-label="O que precisa ser feito?" />
                </form>
                <ul id="to-do" className="list__task" >
                    <li>
                        <input className="checkbox__task" type="checkbox" />
                        <div className="text__task">Teste tarefa um</div>
                        <button className="button__delete-task">Deletar</button>
                    </li>
                </ul>
                <ul id="done" className="list__task">
                    <li>
                        <input className="checkbox__task" type="checkbox" />
                        <div className="text__task">Teste tarefa dois</div>
                        <button className="button__delete-task">Deletar</button>
                    </li>
                </ul>
                <div className="card__footer">
                    <div className="count">0 itens a fazer</div>
                    <div className="filter-button-wrapper">
                        <button id="filter__all" className="active">Todas</button>
                        <button id="filter__to-do">A fazer</button>
                        <button id="filter__done">Completadas</button>
                    </div>
                    <button className="button__clear-all">
                        <img src={broom} alt="" width="20px" height="20px" />
                        Limpar completadas
                    </button>
                </div>
            </div>

            <footer>
                <p>Criado por <a href="https://www.linkedin.com/in/mayllarabay/" target="_blank" rel="noreferrer">Maylla Rabay</a>. 
                    Todos os Direitos Reservados ao Criador. ©2021
                </p>
            </footer>
        </div>
    );
}

export default App;
