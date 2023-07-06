import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className="singlePost">
          <div className="singlePostWraper">
              <img src="/image/10.PNG" alt="" className="singlePostImage" />
              <h1 className="singlePostTitle">Lorem Ipsum is simpl
              <div className="singlePostEdit">
                  <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-solid fa-trash"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuther">Auther: <b>Zeferu</b></span>
                  <span className="singlePostDate">1 hour ago</span>
              </div>
              <p className="singlePostDisc">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                  1500s, when an unknown printer took
                  a galley of type and scrambled it to
                  make a type specimen book. It has
                  survived not only five centuries,
                  but also the leap into electronic
                  typesetting, remaining essentially
                  unchanged. It was popularised in the
                  1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing
                  software like Aldus PageMaker
                  including versions of Lorem Ipsum a
                  galley of type and scrambled it to
                  make a type specimen book. It has
                  survived not only five centuries,
                  but also the leap into electronic
                  typesetting, remaining essentially
                  unchanged. It was popularised in the
                  1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing
                  software like Aldus PageMaker
                  including versions of Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default SinglePost
