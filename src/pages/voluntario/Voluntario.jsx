import style from "./voluntario.module.scss";
import Article from "../../components/article/Article";
import { boxCardsVoluntario } from "../../components/article/descriptionCards";

const Voluntario = () => {
  const setChoice = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={style.section}>
        <h1>Seja Voluntário</h1>
        <p>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>
        <div className={style.divArticles}>
          {boxCardsVoluntario.map((obj) => (
            <Article
              key={obj.titulo}
              titulo={obj.titulo}
              conteudo={obj.conteudo}
            />
          ))}
        </div>
      </section>
      <section className={style.sectionForm}>
        <form onSubmit={setChoice} className={style.form}>
          <h5>Inscrição para voluntários</h5>
          <h6>Dados Pessoais</h6>
          <div className={style.nomeEmail}>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="seu nome"
              className={style.nome}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="seu e-mail"
              className={style.email}
            />
          </div>
          <input
            type="text"
            id="tel"
            name="telefone"
            placeholder="seu telefone"
            className={style.tel}
          />

          <h6>Mensagem Adicional</h6>
          <input
            type="text"
            id="textarea"
            name="textarea"
            placeholder="conte-nos porque vc quer ser voluntario"
            className={style.textArea}
          />
          <div className={style.final}>
            <p>entraremos em contato para mais informações</p>
            <button type="submit">enviar inscrição</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Voluntario;
