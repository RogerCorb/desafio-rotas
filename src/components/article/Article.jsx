import style from "./article.module.scss";
import { useState } from "react";

const Article = (props) => {
  const [nomeClasse] = useState(props.estilo);

  return (
    <article className={style[nomeClasse]}>
      <h3>{props.titulo}</h3>
      <p>{props.conteudo}</p>
    </article>
  );
};

export default Article;
