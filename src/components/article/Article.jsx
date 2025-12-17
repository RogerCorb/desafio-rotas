import style from "./article.module.scss";
import { useState } from "react";

const Article = (props) => {
  console.log(props);

  const [nomeClasse] = useState(props.estilo);

  return (
    <article key={props.key} className={style[nomeClasse]}>
      <h3>{props.titulo}</h3>
      <p>{props.conteudo}</p>
    </article>
  );
};

export default Article;
