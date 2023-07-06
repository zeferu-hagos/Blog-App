import Sidebar from "../../componenets/sidebar/Sidebar"
import "./settings.css"

const Settings = () => {
  return (
    <div className="settings">
          <div className="settingsWraper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  <span className="settingsDeletTitle">Delete Your Account</span>
                  
              </div>
              <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsPP">
                      <img src="/image/21.PNG" alt="" />
                      <label htmlFor="fileInput">
                      <i className="settingsPPIcon fa-solid fa-user"></i>
                      </label>
                      <input type="file" id="fileInput" style={{display:"none"}}/>
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder="zeferu" />
                  <label>Email</label>
                  <input type="email" placeholder="zeferu@gmail.com" />
                  <label>Password</label>
                  <input type="password" />
                  <button className="settingsSubmit">Update</button>
              </form>
          </div>
          <Sidebar/>
    </div>
  )
}

export default Settings
