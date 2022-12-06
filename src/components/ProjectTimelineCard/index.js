import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    ProjectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img alt="project" className="image" src={imageUrl} />
      <div className="header">
        <h1>{ProjectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" />
          <p className="date">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <p href={projectUrl} className="link">
        Visit
      </p>
    </div>
  )
}

export default ProjectTimelineCard
