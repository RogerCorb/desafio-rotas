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

{
  /* <footer class="rodape">
      <div class="artigosRodape">
        <article class="prevencao">
          <img src="./img/LogoVivaBem.png" alt="logo viva bem" />
          <h5>"Prevenção é cuidado com você"</h5>
          <p>
            Conectando pessoas através da sustentabilidade e tecnologia.
          </p>
        </article>
        <article class="links">
          <h5>Links Úteis</h5>
          <a href="Ministério da Saúde: https://www.gov.br/saude/pt-br"
            >Ministério da Saúde</a
          >
          <a href="INCA: https://www.gov.br/inca/pt-br"
            >INCA - Instituto Nacional do Câncer</a
          >
          <a href="SUS: https://www.gov.br/saude/pt-br/sus"
            >SUS - Sistema Único de Saúde</a
          >
        </article>
        <article class="contato">
          <h5>Contato e Apoio</h5>
          <p>Disque Saúde: 136</p>
          <p>sac@saude.gov.br</p>
          <p class="emergencia">
            Em caso de emergência, procure imediatamente uma unidade de
            saúde ou ligue para o SAMU: 192
          </p>
        </article>
      </div>
      <div class="copy">
        <p>
          © 2025 Agenda de Saúde Preventiva. Informações baseadas em
          diretrizes médicas nacionais e internacionais.
        </p>
      </div> */
}
