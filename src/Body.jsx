import "./Body.css";

export default function Body() {
    return (
        <main>
            <section className="body-section">
                <div className="container">
                    <div className="body-content text-center">
                        <h1 className="body-title">
                            Crie <p className="titulo">livremente.</p>
                        </h1>

                        <p className="body-description">
                            Design profissional,edição de fotos,e layout de paginas no mesmo app.
                        </p>
                        <div className="body-buttons">
                            <a href="#recursos" className="body-cta">
                                Obtenha para pessoa fisica
                            </a>
                            <a href="#recursos" className="body-cta" id="botao2">
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