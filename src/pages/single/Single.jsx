import Sidebar from "../../componenets/sidebar/Sidebar"
import SinglePost from "../../componenets/singlePost/SinglePost"
import "./single.css"

const Single = () => {
  return (
    <div className="single">
      {/*post^*/}
      <SinglePost/>
      <Sidebar />
          
    </div>
  )
}

export default Single
