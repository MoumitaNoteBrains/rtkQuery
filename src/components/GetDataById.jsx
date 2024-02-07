import React from 'react'
import { useGetDataByIdQuery } from '../services/post'
import { useParams } from 'react-router-dom'

const GetDataById = () => {
    let id=useParams()
    console.log(id)
    
    let {data,isLoading}=useGetDataByIdQuery(3)
    console.log("b",data)
  return (
    <div>GetDataById</div>
  )
}

export default GetDataById