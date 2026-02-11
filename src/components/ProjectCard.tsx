export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="card project-card">
      <div className="project-card-image">
        <img src={props.imageUrl || ""} alt={props.title} />
      </div>
      <div className="project-card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} className="btn btn--primary btn--noshadow">
          View Project
        </a>
        {props.tags && (
          <div className="project-card-tags">
            {props.tags.map((tag, index) => (
              <span key={index} className="badge badge-skill badge-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
        {props.liveUrl && (
          <a
            href={props.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--noshadow btn--narrow"
          >
            Live Demo
          </a>
        )}
        {props.githubUrl && (
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--noshadow btn--narrow"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
