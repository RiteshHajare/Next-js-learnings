import useSWR from 'swr'

const fetcher = async()=>{
    const response = await fetch("http://localhost:4000/dashboard")
       const data = await response.json();
       return data
}

function DashboardSWR() {
   const{data,error}=  useSWR('dashboard',fetcher)
   if(error) return "An error has occured"
   if(!data) return 'Loading'
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts-{data.posts} </h2>
      <h2>likes-{data.likes} </h2>
      <h2>followers-{data.followers}</h2>
      <h2>following-{data.following}</h2>
    </div>
  )
}

export default DashboardSWR