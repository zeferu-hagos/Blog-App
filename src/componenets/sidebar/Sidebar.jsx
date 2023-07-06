import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
          <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT ME</span>
              <img src="/image/18.PNG" alt="" />
              <p>
                  Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the
                 
              </p>
          </div>
          <div className="sidebarItem">
              <span className="sidbarTitle">CATAGORIES</span>
              <ul className="sidbarList">
                  <li className="sidebarListItem">Life</li>
                  <li className="sidebarListItem">Sport</li>
                  <li className="sidebarListItem">Music</li>
                  <li className="sidebarListItem">Style</li>
                  <li className="sidebarListItem">Tech</li>
                  <li className="sidebarListItem">Cinema</li>
              </ul>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">Follow Us</span>
              <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook"></i>
              <i className="sidebarIcon fa-brands fa-twitter"></i>
              <i className="sidebarIcon fa-brands fa-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
              </div>
          </div>

    </div>
  )
}

export default Sidebar
