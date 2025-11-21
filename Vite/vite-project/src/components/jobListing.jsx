import { useState } from "react"
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({job}) => {
    
const[showFullDescription, setShowFullDescription] = useState(false); 
let description = job.description;

if (!showFullDescription) {
description = description.slice(0, 100) + '...';
}
else {
    description = job.description;
}
    
    return (
    <div>
        
    
      <div key={job.id}>
        <FaMapMarker />
        <h2>{job.id}={job.title}{description}</h2>
        <button onClick={()=>setShowFullDescription((prevState) =>!prevState)}>
        {showFullDescription ? 'less' : 'More' }
        </button>
        </div>
    </div>
  )
}

export default JobListing
