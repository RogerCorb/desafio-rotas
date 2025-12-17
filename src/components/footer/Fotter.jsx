import style from "./footer.module.scss";

const Fotter = () => {
  return (
    <footer className={style.footer}>
      <div className={style.artigosdeRodape}>
        <article className={style.logo}>
          <div className={style.divLogo}>
            <img src="/src/assets/logo.png" alt="logo " />
            <h5>Médicos & Dentistas</h5>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </article>
        <article className={style.contato}>
          <h5>Contato</h5>
          <p>contato@medico-dentista.org</p>
          <p>(11) 3000-0000</p>
          <p>São Paulo, Brasil</p>
        </article>
        <article className={style.redesSociais}>
          <h5>Redes Sociais</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </article>
      </div>
      <div className={style.copy}>
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Fotter;
