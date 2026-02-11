export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="card project-card">
      <div className="project-card__image">
        {props.imageUrl && <img src={props.imageUrl || ""} alt={props.title} />}
      </div>
      <div className="project-card__content">
        <h3 className="card__title mb-sm">{props.title}</h3>
        <p className="card__description">{props.description}</p>
        {props.tags && (
          <div className="project-card__tags">
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
            className="btn btn--primary btn--noshadow btn--narrow"
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
