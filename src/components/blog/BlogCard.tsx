export interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
  date?: string;
}

export function BlogCard(props: BlogCardProps) {
  return (
    <div className="card blog-card">
      <div className="blog-card-image">
        <img src={props.imageUrl || ""} alt={props.title} />
      </div>
      <div className="blog-card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link}>Read More</a>
        {props.tags && (
          <div className="blog-card-tags">
            {props.tags.map((tag, index) => (
              <span key={index} className="blog-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {props.date && <p className="blog-card-date">{props.date}</p>}
      </div>
    </div>
  );
}
