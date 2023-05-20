import React, { useEffect, useState } from 'react'

function dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
      async function fetchDashBoard(){
       const response = await fetch("http://localhost:4000/dashboard")
       const data = await response.json();
      //  console.log(data);
       setDashboardData(data)
       setIsLoading(false);
      }
      fetchDashBoard()
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts-{dashboardData.posts} </h2>
      <h2>likes-{dashboardData.likes} </h2>
      <h2>{dashboardData.followers}</h2>
      <h2>{dashboardData.following}</h2>
    </div>
  )
}

export default dashboard