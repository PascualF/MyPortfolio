import ProjectCard from './ProjectCard'
import screenshotShopCart from '../assets/screenshots/shop-cart-home.png'
import screenshotTaskManager from '../assets/screenshots/task-manager-api.png'
import techIcons from '../assets/tech.js'

export default function Projects() {
    return (
        <section id="projects" className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <ProjectCard 
                    screenshotProject={screenshotShopCart}
                    title="Pastry Shop"
                    description="A shopping cart project made with React to practice component state and user interactions."
                    linkLive="https://pastry-shop-yum.netlify.app/"
                    gitHubLink="https://github.com/PascualF/shopping-cart"
                    techIcons={techIcons.filter(icon => ['React'].includes(icon.name))}
                />

                {/* Project 2 */}
                <ProjectCard 
                    screenshotProject={screenshotTaskManager}
                    title="Task Manager API"
                    description="A Task Manager project made with Javascript and MongoDB to practice RESTful API development."
                    linkLive="https://donezoid.netlify.app/app.html"
                    gitHubLink="https://github.com/PascualF/TaskManager-API"
                    techIcons={techIcons.filter(icon => ['Javascript', 'MongoDB'].includes(icon.name))}
                />

                {/* Project 3 */}
                <ProjectCard 
                    screenshotProject={screenshotTaskManager}
                    title="Finance App"
                    description="A Task Manager project made with Javascript and MongoDB to practice RESTful API development."
                    linkLive=""
                    gitHubLink="https://github.com/PascualF/Finance_App"
                    techIcons={techIcons.filter(icon => ['TypeSecript', 'TailwindCSS' , 'Prisma'].includes(icon.name))}
                />
            </div>
        </section>
    )
}