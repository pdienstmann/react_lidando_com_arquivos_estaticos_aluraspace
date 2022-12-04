import React from "react";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Card({ item, styles }) {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.gallery__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={open} alt="icone de expandir" />
          <img src={favorito} alt="ícone de coração ou favoritar" />
        </span>
      </div>
    </li>
  );
}
