import { Link } from "react-router-dom";
import Fotter from "../../components/footer/Fotter";
import style from "./notfound.module.scss";

const Notfound = () => {
  return (
    <>
      <Header />
      <section className={style.sectioNotfound}>
        <h1>
          error 404 - Esta página não existe, mas ops ! espera ai , se ela
          não existe como vc está vendo ela agora !!!{" "}
        </h1>

        <Link to="/home" className={style.btnUm}>
          Voltar/Home
        </Link>
      </section>
      <Fotter />
    </>
  );
};

export default Notfound;
