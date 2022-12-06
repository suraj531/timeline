import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="time-line-container">
      <h1 className="journey">
        My JOURNEY OF
        <br />
        <span className="heading">CCBP 4.0</span>
      </h1>
      <div className="time-line-view-container">
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          slideShow
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
