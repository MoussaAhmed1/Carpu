import React from 'react'
import {Timeline,TimelineItem,TimelineDot,TimelineSeparator,TimelineContent,TimelineConnector} from '@mui/lab'
export default function TimeLineFT({from, to}) {
  return (
    <div>
      <Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      {/* from
      <br /> */}
      {from}
      </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    <TimelineContent>{to}</TimelineContent>
  </TimelineItem>
</Timeline>
    </div>
  )
}
