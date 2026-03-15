function About(props){
    // Props არის ინფორმაცია რომელიც კომპონენტს გადაეცემა მის გამოყენებისას
// მაგალითად მომხმარებლის სახელი, სტატუსი ან ფუნქცია
// ეს საშუალებას გვაძლევს ერთი და იგივე კომპონენტი გამოყენებულ იქნას სხვადასხვა მონაცემებით
    
    return (
        <div style={props.style}>
            <h2>About Section</h2>
            {/* Img, src გადაეცემა props-ით */}
            <img src={props.imgSrc} alt="About Image" style = {{width: "200px"}}/>

            <p>This is some about text.</p>
        </div>
    );
}

export default About