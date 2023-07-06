import "./post.css"

const Post = () => {
  return (
    <div className="post">
          <img className="postImage" src="/image/19.PNG" alt="" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className="postTitle">Lorem Ipsum is simply
              </span>
              <hr />
              <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
              the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
    </div>
  )
}

export default Post
