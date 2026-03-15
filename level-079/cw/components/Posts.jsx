import Post from './Post'
function Posts({posts}){



    return (
        <div>
            {posts.map((obj) => (
                <Post key={obj.id} obj={obj}/>
            ))
}
        </div>

    )
}


export default Posts