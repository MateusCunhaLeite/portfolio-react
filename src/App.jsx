import { pessoa, formacao, stacks, projetos } from './data.js'
import './App.css'

function Secao({ id, titulo, children }) {
  return (
    <section id={id} className="secao">
      <h2 className="titulo-secao">{titulo}</h2>
      {children}
    </section>
  )
}

export default function App() {
  const categorias = [...new Set(stacks.map((s) => s.categoria))]

  return (
    <>
      <header className="topo">
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#formacao">Formação</a>
          <a href="#stacks">Stacks</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="saudacao">Olá, eu sou</p>
          <h1>{pessoa.nome}</h1>
          <p className="cargo">{pessoa.cargo}</p>
          <p className="instituicao">{pessoa.instituicao}</p>
        </section>

        <Secao id="sobre" titulo="Sobre mim">
          <p className="texto">{pessoa.sobre}</p>
        </Secao>

        <Secao id="formacao" titulo="Formação">
          <div className="card">
            <h3>{formacao.curso}</h3>
            <p>{formacao.instituicao}</p>
            <span className="badge">{formacao.periodo}</span>
          </div>
        </Secao>

        <Secao id="stacks" titulo="Stacks">
          {categorias.map((cat) => (
            <div key={cat} className="grupo-stack">
              <h3>{cat}</h3>
              <ul className="lista-stacks">
                {stacks
                  .filter((s) => s.categoria === cat)
                  .map((s) => (
                    <li key={s.nome}>{s.nome}</li>
                  ))}
              </ul>
            </div>
          ))}
        </Secao>

        <Secao id="projetos" titulo="Projetos">
          <div className="grid-projetos">
            {projetos.map((p) => (
              <article key={p.titulo} className="card">
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <div className="tags">
                  {p.tecnologias.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="link">
                  Ver projeto →
                </a>
              </article>
            ))}
          </div>
        </Secao>

        <Secao id="contato" titulo="Contato">
          <ul className="contatos">
            <li><a href={`mailto:${pessoa.email}`}>{pessoa.email}</a></li>
            <li><a href={pessoa.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={pessoa.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </Secao>
      </main>

      <footer className="rodape">
        © {new Date().getFullYear()} {pessoa.nome}
      </footer>
    </>
  )
}
