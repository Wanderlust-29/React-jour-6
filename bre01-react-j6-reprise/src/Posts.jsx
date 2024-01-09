const Posts = (props) => {
  const {posts} = props
    return(
        <>
          <ul>
          {posts.map((post, i) => (
            <li key={i}>
                <h2>{post.title}</h2>
                <p >{post.body}</p>
            </li>
          ))}
          </ul>
        </>
    )
}

export default Posts;