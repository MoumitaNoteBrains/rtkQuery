import React from 'react'
import { useGetDataByLimitQuery } from '../services/post'

const GetDatabyLimit = () => {
    let {data}=useGetDataByLimitQuery(4)
    console.log("limitdata",data)
  return (
    <div>

    </div>
  )
}

export default GetDatabyLimit