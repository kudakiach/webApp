import React from 'react'

const Footer = () => {
    return(
<footer>
      <div class="container-fluid bg-dark">
        <div class="container">
          <div class="row py-5" id="sitemap-row">
            <div class="col-md-4 d-none d-md-block">
              <a class="text-decoration-none text-center" id="footerLogo" href="index.php"><h1>Luca&apos;s Loaves</h1></a>
            </div>
            <div class="col-md-4 col-sm-12">
              <ul class="list-unstyled">
                <li class="sitemapItem">
                  <a href="products.php">Products</a>
                </li>
                <li class="sitemapItem">
                  <a href="breadMakingClass.php">Bread Making Class</a>
                </li>
                <li class="sitemapItem">
                  <a href="careers.php">Careers</a>
                </li>
                <li class="sitemapItem">
                  <a href="aboutUs.php">About Us</a>
                </li>
                <li class="sitemapItem">
                  <a href="contact.php">Contact</a>
                </li>
                <li class="sitemapItem">
                  <a href="privacy.php">Privacy Policy</a>
                </li>
              </ul>
            </div>
            
          </div>
          <div class="row copyright text-center">
              <p>COPYRIGHT&copy; <span class="currentYear"></span> Luca's Loaves Pty Ltd. All rights reserved.</p>
          </div>
        </div>

    </div>
</footer>
    )
}
export default Footer;


