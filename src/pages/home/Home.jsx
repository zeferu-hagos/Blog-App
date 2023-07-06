
import { useEffect, useState } from "react"
import Header from "../../componenets/header/Header"
import Posts from "../../componenets/posts/Posts"
import Sidebar from "../../componenets/sidebar/Sidebar"
import "./home.css"
import axios from "axios"

const Home = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:3000/api/posts',
      );

      setData(result.data);
    };

    fetchData();
  }, []);
    return (
        <>
         <Header />
    <div className="home">
                <Posts />
                <Sidebar/>
     </div>
        </>
  )
}

export default Home
