import React from 'react'
import { Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <hr/>
<footer class="page-footer font-small blue pt-4 grey">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase">Glossier</h5>
        <p> Your Online Store</p>

      </div>

      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase"> Categories Available</h5>
        <ul>Skin care </ul>
        <ul>Body </ul>
        <ul> Make up</ul>
        <ul> Fragance</ul>




      </div>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Others</h5>

        <ul class="list-unstyled">
         <a href="https://github.com/tanx1825" className="link-dark" target="_blank"> Github </a>
        </ul>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="/" className="link-dark"> Glossier </a>

  </div>

</footer>






<br />
<hr/>
<br/>

        </div>
    )
}
