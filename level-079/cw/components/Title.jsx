function Title({obj}){
    if (obj.likes > 170) {
    return <h1>Post Title: Most popular</h1>
  } else if (obj.shares > 80) {
    return <h1>Post Title: Most shared Post</h1>
  } else if (obj.comments.length > 2) {
    return <h1>Post Title: Most commented</h1>
  } else {
    return <h1>Normal Post</h1>
  }
}

export default Title