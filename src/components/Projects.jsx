import screenshotShopCart from '../assets/screenshots/shop-cart-home.png'
import screenshotTaskManager from '../assets/screenshots/task-manager-api.png'

export default function Projects() {
    return (
        <section id="projects" className="mb-20">
                  <h3 className="text-2xl font-semibold mb-6">Projects</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Project 1 */}
                    <div className="bg-white rounded-xl shadow p-4">
                      <img
                        src={screenshotShopCart}
                        alt="Pastry Shop Screenshot"
                        className="rounded mb-4"
                      />
                      <h4 className="text-lg font-semibold">Pastry Shop</h4>
                      <p className="text-sm mb-2">
                        A shopping cart project made with React to practice component state and user interactions.
                      </p>
                      <div className="flex gap-3 text-sm">
                        <a
                          href="https://pastry-shop-yum.netlify.app/"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >Live</a>
                        <a
                          href="https://github.com/PascualF/shopping-cart"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >GitHub</a>
                      </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-xl shadow p-4">
                      <img
                        src={screenshotTaskManager}
                        alt="Task Manager Screenshot"
                        className="rounded mb-4"
                      />
                      <h4 className="text-lg font-semibold">Task Manager API</h4>
                      <p className="text-sm mb-2">
                        A shopping cart project made with React to practice component state and user interactions.
                      </p>
                      <div className="flex gap-3 text-sm">
                        <a
                          href="https://donezoid.netlify.app/app.html"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >Live</a>
                        <a
                          href="https://github.com/PascualF/shopping-cart"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >GitHub</a>
                      </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-white rounded-xl shadow p-4">
                      <img
                        src={screenshotShopCart}
                        alt="Finance App Screenshot"
                        className="rounded mb-4"
                      />
                      <h4 className="text-lg font-semibold">Finance App</h4>
                      <p className="text-sm mb-2">
                        A shopping cart project made with React to practice component state and user interactions.
                      </p>
                      <div className="flex gap-3 text-sm">
                        <a
                          href=""
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >Live</a>
                        <a
                          href="https://github.com/PascualF/Finance_App"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >GitHub</a>
                      </div>
                    </div>
                  </div>
                  
                </section>
    )
}