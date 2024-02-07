
import { useGetAllDataQuery } from '../services/post'

const GetData = () => {
    const {data,isLoading}=useGetAllDataQuery()
    // const data=useGetAllDataQuery()

    console.log(data)
    if(isLoading) return <p>loading...</p>
  return (
    <div>
        ALL DATA
        {data.map((ele)=>(
        <div key={ele.id}>
            <p>{ele.id} {ele.title}</p>
            <p>{ele.body}</p>
            <hr />

        </div>
    ))}</div>
  )
}

export default GetData