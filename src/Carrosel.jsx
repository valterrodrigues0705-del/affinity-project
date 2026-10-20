import "./Carrosel.css"

const logos = [
    { nome: "Expedia", imagem: "/logos/expedia.png" },
    { nome: "Hey", imagem: "/logos/hey.png" },
    { nome: "Made", imagem: "/logos/made.png" },
    { nome: "T-mobile", imagem: "/logos/t-mobile.png" },
    { nome: "Adobe", imagem: "/logos/adobe.png" },
    { nome: "airbnb", imagem: "/logos/airbnb.png" },
    { nome: "amazon", imagem: "/logos/amazon.png" },
    { nome: "bmw", imagem: "/logos/bmw.png" },
    { nome: "canva", imagem: "/logos/canva.png" },
    { nome: "coca-cola", imagem: "/logos/coca-cola.png" },
    { nome: "disney", imagem: "/logos/disney.png" },
    { nome: "dropbox", imagem: "/logos/dropbox.png" },
    { nome: "expedia", imagem: "/logos/expedia.png" },
    { nome: "figma", imagem: "/logos/figma.png" },
    { nome: "google", imagem: "/logos/google.png" },
    { nome: "hubspot", imagem: "/logos/hubspot.png" },
    { nome: "ibm", imagem: "/logos/ibm.png" },
    { nome: "linkedin", imagem: "/logos/linkedin.png" },
    { nome: "mcdonalds", imagem: "/logos/mcdonalds.png" },
    { nome: "microsoft", imagem: "/logos/microsoft.png" },
    { nome: "netflix", imagem: "/logos/netflix.png" },
    { nome: "nike", imagem: "/logos/nike.png" },
    { nome: "notion", imagem: "/logos/notion.png" }
]

export default function Carrosel() {
    return (
        <section className="carrosel">
            <div className="carrosel-track">
                {[0, 1].map((grupo) => (
                    <div
                        className="carrosel-group"
                        key={grupo}
                        aria-hidden={grupo === 1}
                    >
                        {logos.map((logo) => (
                            <img
                                key={logo.nome}
                                src={logo.imagem}
                                alt={grupo === 0 ? logo.nome : ""}
                                className="carrosel-logo"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}