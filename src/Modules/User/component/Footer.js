export const Footer=()=>{
    return(<>
        <footer className="footer footer-black  footer-white ">
        <div className="container">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li><a href="https://www.creative-tim.com" target="_blank">About us</a></li>
                <li><a href="http://blog.creative-tim.com/" target="_blank">Contact us</a></li>
                <li><a href="https://www.creative-tim.com/license" target="_blank">Privacy Policy</a></li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
              Copyright © 2024 AI Health Care. All rights reserved.
                {/* © <script>
                  document.write(new Date().getFullYear())
                </script>, made with <i className="fa fa-heart heart"></i> by AI Health Carex */}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>)
}