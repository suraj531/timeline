import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="header">
        <h1 className="heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon" />
          <p className="date">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="unorder">
        {tagsList.map(eachItem => (
          <li key={eachItem.id} className="list">
            <p className="list-item">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
