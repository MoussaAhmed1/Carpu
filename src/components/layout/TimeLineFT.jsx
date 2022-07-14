import React from 'react'
import {Timeline,TimelineItem,TimelineDot,TimelineSeparator,TimelineContent,TimelineConnector} from '@mui/lab'
export default function TimeLineFT() {
  return (
    <div>
      <Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    {/* <TimelineContent>Alex</TimelineContent> */}
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    {/* <TimelineContent>Suez</TimelineContent> */}
  </TimelineItem>
</Timeline>
    </div>
  )
}
