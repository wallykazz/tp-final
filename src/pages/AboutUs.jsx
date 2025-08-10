import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
const AboutUs = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>Sobre Nosotros</h1>

        <section className="about-section">
          <h2>¿De qué trata el proyecto?</h2>
          <p>
            Nuestra tienda virtual nace con el propósito de ofrecer una experiencia de compra en línea cómoda, segura y accesible para todos. Reunimos una cuidada selección de productos de calidad, pensados para mejorar tu día a día, con precios economicos y atención personalizada.
          </p>
        </section>

        <section className="about-section">
          <h2>¿A quién está dirigido?</h2>
          <p>
            Está dirigida a personas que valoran su tiempo y buscan una alternativa confiable para hacer sus compras desde casa, el trabajo o desde cualquier lugar. Ya seas un cliente habitual o estés explorando por primera vez, nuestra tienda está pensada para vos.
          </p>
        </section>

        <section className="about-section">
          <h2>Tecnologías y enfoques utilizados</h2>
          <p>
            Nuestra plataforma está desarrollada con React para garantizar rapidez y fluidez en la navegación. Utilizamos integraciones seguras para pagos en línea, bases de datos modernas y prácticas de diseño responsivo para asegurar una experiencia óptima en cualquier dispositivo. Además, aplicamos principios de usabilidad y accesibilidad para que todos puedan comprar con facilidad.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export { AboutUs }