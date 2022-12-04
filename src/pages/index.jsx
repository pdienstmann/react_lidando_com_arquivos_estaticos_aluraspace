import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Populares from "components/Populares";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Header></Header>
      <main className={styles.principal}>
        <Menu></Menu>
        <Banner />
      </main>
      <div className={styles.gallery}>
        <Gallery />
        <Populares />
      </div>
      <Footer />
    </>
  );
}
