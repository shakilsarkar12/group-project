const Hero = () => {
    return (
        <section>
            <p>This is Hero section</p>
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing content and features.</p>
            <button>Get Started</button>
            <button>Learn More</button>
            <img src="hero-image.jpg" alt="Hero" />
            <div className="hero-footer">   
                <p>© 2023 Your Company</p>
                <p>Follow us on social media</p>
                <ul>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                    <li><a href="https://youtube.com">YouTube</a></li>
                    <li><a href="https://github.com">GitHub</a></li>
                </ul>
            </div>
        </section>
    );
};
export default Hero;