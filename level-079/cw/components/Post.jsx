import Title from './Title'
function Post({obj}){

    return (
        <div>
            <Title obj={obj}/>

            <h2>{obj.type}</h2>
            <p>{obj.content}</p>
            <p>{obj.author}</p>
            <p>{obj.date}</p>
            <p>{obj.likes}</p>
            <p>{obj.shares}</p>
            
            <div>
                <h3>Tags:</h3>
                {obj.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>

            <div>
                <h3>Comments:</h3>
                {obj.comments.map((comment, index) =>(
                    <p key={index}>{comment.user}: {comment.text}</p>
                ))}
            </div>
        </div>
    )
}



export default Post