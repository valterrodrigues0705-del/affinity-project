import "./Hero.css";

function Hero() {
    return (
        <main>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">
                            Crie <em className="titulo">livremente.</em>
                        </h1>

                        <p className="hero-description">
                            Design profissional,edição de fotos,e layout de paginas no mesmo app.
                        </p>
                        <div className="hero-buttons">
                            <a href="#recursos" className="hero-cta">
                                Obtenha para pessoa fisica
                            </a>
                            <a href="#recursos" className="hero-cta" id="botao2">
                                Adquira para empresas
                            </a>
                        </div>
                        <p className="canvas">By Canva</p>
                    </div>
                </div>
            </section>


        </main>
    );
}
export default Hero