import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">App desenvolvido por <a href="https://github.com/marlonx19" target="_blank" rel="noreferrer">Marlon Englemam</a></p>
        <p className="text-light"><small><strong>Semana Spring React</strong><br/>
        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
  </footer>
  )
}

export default Footer;