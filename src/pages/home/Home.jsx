import s from "./home.module.scss";
import Saude from "../../assets/saude.png";
import Doutor from "../../assets/doutor.png";
import Article from "../../components/article/Article";

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
            <a className={s.btnUm} href="">
              Seja Voluntário
            </a>
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
          <Article
            titulo="Acesso Equitativo"
            conteudo="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
            estilo="article"
          ></Article>
          <Article
            titulo="Comunidade Forte"
            conteudo="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
            estilo="article"
          ></Article>
          <Article
            titulo="Bem-estar Total"
            conteudo="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
            estilo="article"
          ></Article>
        </div>
      </section>
      <section className={s.sectionImpacto}>
        <h2>Nosso Impacto</h2>
        <p>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>
        <div className={s.boxCardsImpacto}>
          <Article
            titulo="2,500+"
            conteudo="Pessoas Atendidas"
            estilo="impacto"
          ></Article>
          <Article
            titulo="150+"
            conteudo="Profissionais Voluntários"
            estilo="impacto"
          ></Article>
          <Article
            titulo="98%"
            conteudo="Satisfação dos Pacientes"
            estilo="impacto"
          ></Article>
          <Article
            titulo="5+"
            conteudo="Anos de Dedicação"
            estilo="impacto"
          ></Article>
        </div>
      </section>
    </main>
  );
};

export default Home;
