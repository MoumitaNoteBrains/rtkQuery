import React from 'react'
import { useCreatePostMutation } from '../services/post'

const CreateData = () => {
    let [createPost,responseInfo]=useCreatePostMutation()
    let newpost={
        title:"this is title",
        body:"This is body",
        userId:1
    }
    console.log("ressinfo",responseInfo)
  return (
    <div>
       <button onClick={()=>createPost(newpost)}>add</button>
    </div>
  )
}

export default CreateData