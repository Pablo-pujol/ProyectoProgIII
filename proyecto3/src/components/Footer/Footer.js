import react from 'react';
import './Footer.css';


function Footer () {
    return(
        <footer class="main-footer">
        <div class="container">
            <div class="footer">
                <div class="col-12 col-lg-4">
                    <article class="footer-data">
                    <i class="fas fa-film"></i>
                        <h2>Santiago Lemoine</h2>
                    </article>
                </div>
                <div class="col-12 col-lg-4">
                    <article class="footer-data">
                        <i class="fas fa-film"></i>
                        <h2>Pablo Pujol</h2>
                    </article>
                </div>
                <div class="col-12 col-lg-4">
                    <article class="footer-data">
                        <i class="fas fa-film"></i>
                        <h2>Agustina Casiello</h2>
                    </article>
                </div>
            </div>
        </div>
    
        <ul class="iconos">
            <ul class="redes">
                <h6 class="titulos-redes">Seguinos en</h6>
                <ul class="iconos-redes">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter-square"></i>
                </ul>
            </ul>
        </ul>
    </footer>
     )}
export default Footer;