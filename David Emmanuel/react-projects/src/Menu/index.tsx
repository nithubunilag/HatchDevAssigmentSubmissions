import './Menu.css'
import projects from '../Projects'

export default function Menu({ project, setProject }: {
    project: keyof typeof projects,
    setProject: (newProject: keyof typeof projects) => void,
}) {
    return <aside className='menu'>
        {Object.keys(projects).map((title, i) =>
            <ProjectLink
                key={i}
                title={title}
                isActive={title === project}
                setProject={setProject}
            />
        )}
    </aside>
}

function ProjectLink({ title, isActive, setProject }: {
    title: string,
    isActive: boolean,
    setProject: (newProject: keyof typeof projects) => void,
}) {
    return <h2
        className={'project-link' + (isActive ? ' active' : '')}
        onClick={() => setProject(title as keyof typeof projects)}
    >
        {title}
    </h2>
}