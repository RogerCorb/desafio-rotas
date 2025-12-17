import s from "./home.module.scss";
import Saude from "../../assets/saude.png";
import Doutor from "../../assets/doutor.png";
import Article from "../../components/article/Article";
import { Link } from "react-router-dom";
import {
  boxCards,
  boxCardsImpacto,
} from "../../components/article/descriptionCards";

const Home = () => {
  return (
    <main>
      <section className={s.section}>
        <div className={s.conteudo}>
          <div>
            <img src={Saude} alt="" />
          </div>

          <h1>Saúde e cuidado sem barreiras</h1>

          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>

          <div className={s.buttons}>
            <Link to="/voluntario" className={s.btnUm}>
              Seja Voluntário
            </Link>
            <a className={s.btnDois} href="">
              Como Ajudar
            </a>
          </div>
        </div>

        <div className={s.doutorImgBox}>
          <img src={Doutor} alt="Médico voluntário sorrindo" />
        </div>
      </section>

      <section className={s.sectionMissao}>
        <h2>Nossa Missão</h2>
        <p>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>
        <div className={s.boxCards}>
          {boxCards.map((obj) => (
            <Article
              key={obj.titulo}
              titulo={obj.titulo}
              conteudo={obj.conteudo}
              estilo={obj.estilo}
            ></Article>
          ))}
        </div>
      </section>
      <section className={s.sectionImpacto}>
        <h2>Nosso Impacto</h2>
        <p>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>
        <div className={s.boxCardsImpacto}>
          {boxCardsImpacto.map((obj) => (
            <Article
              key={obj.titulo}
              titulo={obj.titulo}
              conteudo={obj.conteudo}
              estilo={obj.estilo}
            ></Article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
