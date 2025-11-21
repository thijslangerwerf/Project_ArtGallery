

import Hero from '../components/hero.jsx';
import hero from '../components/hero.jsx';
import HomeCards from '../components/homeCards.jsx';
import JobListings from '../components/jobListings.jsx';
import ViewAllJobs from '../components/viewAllJobs.jsx';
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage!<h2>test</h2>
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </div>
  )
}

export default HomePage
