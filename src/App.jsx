import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 navbar-black">
        <div class="container">
          <a class="navbar-brand affinity-logo-text" href="#">Affinity</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown position-static">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Produto
                </a>
                <div className="dropdown-menu w-100 shadow-lg border-0 p-4 mt-2 rounded-4">
                  <div className="container">
                    <div className="row g-4">

                      <div className="col-lg-7 menu-items-column" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <span className="d-block text-uppercase text-muted fs-7 fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                          FLUXOS DE TRABALHO CRIATIVOS
                        </span>
                        <div className="d-flex flex-column gap-3">
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-vector-pen fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Design gráfico</h6>
                              <p className="mb-0 text-muted small">Tudo o que é necessário para design vetorial e ilustrações digitais</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-camera fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Edição de fotos</h6>
                              <p className="mb-0 text-muted small">Ferramentas profissionais de edição e retoque de imagens</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-layout-text-window fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Layout de página</h6>
                              <p className="mb-0 text-muted small">As ferramentas mais poderosas de design e layout de página</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-pen fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Ilustração Digital</h6>
                              <p className="mb-0 text-muted small">Ferramentas Vetorias</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-fonts fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Design tipografico</h6>
                              <p className="mb-0 text-muted small">As ferramentas mais poderosas de design e layout de página</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-c-circle fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Integraçao com o Canvas</h6>
                              <p className="mb-0 text-muted small">As ferramentas mais poderosas de design e layout de página</p>
                            </div>
                          </a>
                          <a href="#" className="text-decoration-none p-2 rounded-3 d-flex align-items-start gap-3 text-dark menu-hover">
                            <i className="bi bi-bezier2 fs-4 mt-1"></i>
                            <div>
                              <h6 className="mb-1 fw-bold">Integraçao de Produtos</h6>
                              <p className="mb-0 text-muted small">As ferramentas mais poderosas de design e layout de página</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 d-flex align-items-center">
                        <div className="card bg-light border-0 p-3 rounded-4 w-100">
                          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" alt="Affinity" className="card-img-top rounded-3 mb-3" style={{ height: '180px', objectFit: 'cover' }} />
                          <div className="card-body p-0">
                            <h6 className="fw-bold text-dark mb-1"><i className="bi bi-images me-2"></i>Sobre o Affinity</h6>
                            <p className="text-muted small mb-0">Feito para pessoas obcecadas pela criação, por pessoas que respeitam a criação</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Descubra
                </a>
                <div className="dropdown-menu shadow-lg border-0 p-4 mt-2 rounded-4" style={{ width: '380px' }}>
                  <span className="d-block text-uppercase text-muted fw-bold mb-3" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                    CONHEÇA O AFFINITY
                  </span>
                  <div className="d-flex flex-column gap-3">
                    <a href="#" className="text-decoration-none p-2 rounded-3 text-dark menu-hover">
                      <h6 className="mb-1 fw-bold">Inspiracao.af</h6>
                      <p className="mb-0 text-muted small">Centro de inspiração para criadores, por criadores</p>
                    </a>
                    <a href="#" className="text-decoration-none p-2 rounded-3 text-dark menu-hover">
                      <h6 className="mb-1 fw-bold">Em destaque</h6>
                      <p className="mb-0 text-muted small">Veja como os artistas criam com o Affinity</p>
                    </a>
                    <a href="#" className="text-decoration-none p-2 rounded-3 text-dark menu-hover">
                      <h6 className="mb-1 fw-bold">Recursos de aprendizado</h6>
                      <p className="mb-0 text-muted small">Conteúdo útil para ajudar você a aprimorar suas habilidades no Affinity</p>
                    </a>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Ajuda</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">Obtenha Affinity</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
