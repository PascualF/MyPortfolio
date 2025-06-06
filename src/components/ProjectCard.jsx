export default function ProjectCard(props) {
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <img
                src={props.screenshotProject}
                alt={props.title + ` Screenshot`}
                className="rounded mb-4"
            />
            <h4 className="text-lg font-semibold">{props.title}</h4>
            <p className="text-sm mb-2">
                {props.description}
            </p>

            {/* Tech icons */}
            {props.techIcons && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {props.techIcons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.name}
                            className="w-6 h-6"
                        />
                    ))}
                </div>
            )}

            <div className="flex justify-center gap-3 text-sm">
                <a
                    href={props.linkLive}
                    className="text-blue-600 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                >Live</a>
                <a
                    href={props.gitHubLink}
                    className="text-blue-600 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                >GitHub</a>
            </div>
        </div>
    )
}