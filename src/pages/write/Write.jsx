import "./write.css"

const Write = () => {
  return (
      <div className="write">
          <img className="writeImage" src="/image/17.PNG" alt=""/>
          <form className="writeForm">
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input type="text" placeholder="title"
                      className="writeInput" autoFocus={true} />
              </div>
              <div className="writeFormGroup">
                  <textarea placeholder="tell your story..."
                      type="text" className="writeInput writeText"></textarea>
              </div>
              <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
