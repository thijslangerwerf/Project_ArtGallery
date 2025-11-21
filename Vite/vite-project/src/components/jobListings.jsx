import jobs from '../jobs.json'
import JobListing from './jobListing.jsx'
import React from 'react'

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <div>
      {jobs.map((job) => (
<JobListing key={job.id} job={job}/>
      ))}
       
    </div>
  )
}

export default JobListings

