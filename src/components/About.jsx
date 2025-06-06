import myPhoto from '../assets/profile.jpg';

export default function About() {
    return (
        <section id="about" className="text-center mb-20">
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>

            <img
                src={myPhoto}
                alt="Pascual Felicio"
                className="w-32 h-32 mx-auto rounded-full shadow mb-6 object-cover"
            />

            <p className="max-w-2xl text-center text-md mx-auto">
            I'm Pascual — 
            a self-taught web developer with a strong foundation in mechanical engineering
            and years of hands-on experience as both an engineer and a project manager. 
            I bring not only deep technical know-how but also strong communication, 
            leadership, and problem-solving skills developed through 
            leading cross-functional teams and delivering complex projects. 
            Now transitioning into tech, I’m passionate about creating intuitive, 
            user-focused web applications and always eager to learn and build something meaningful.
            </p>
        </section>
    )
}