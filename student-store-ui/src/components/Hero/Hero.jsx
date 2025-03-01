import "./Hero.css"


//Banner Section of the website
export default function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <h1>Welcome!</h1>
                <h1>Find your Merch!</h1>
                <p>We have all kinds of cool stuff!</p>
            </div>
            <div className="bag">
                <img 
                    style={{ width: "300px", height: "auto" }} 
                    src="https://logowik.com/content/uploads/images/shopping-bag6504.jpg" />
            </div>
        </div>
    )
}