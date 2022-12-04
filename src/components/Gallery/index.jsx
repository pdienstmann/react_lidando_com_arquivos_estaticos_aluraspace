import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import photos from "./photos.json";
import Cards from "./Cards";

function Gallery() {
  const [itens, setItens] = useState(photos);

  const tags = [...new Set(photos.map((valor) => valor.tag))];

  const photoFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} photoFilter={photoFilter} setItens={setItens}></Tags>
      <Cards itens={itens} styles={styles} />
    </section>
  );
}

export default Gallery;
