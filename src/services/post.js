import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const postApi=createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints:(builder)=>({
        getAllData:builder.query({
            query:()=>({
                url:"posts"
            })
        }),
        getDataById:builder.query({
            query:(id)=>({
                url:`posts/${id}`
            })
            
            // query:(id)=>{
            //     console.log("id",id)
            //     return {

            //         url:`posts/${id}`
            //     }
            // }
        }),
        getDataByLimit:builder.query({
            query:(num)=>({
                url:`posts?_limit=${num}`
            })

        }),
        getDeleteData:builder.mutation({
            query:(id)=>({
                url:`posts/${id}`,
                method:"DELETE"
            })
        }),
        createPost:builder.mutation({
            query:(newpost)=>{
                console.log(newpost)
                return {
                    url:"posts",
                    method:'POST',
                    body:newpost,
                    // headers:{

                    // }
                }
            }
        })
    })
})

export const {useGetAllDataQuery,useGetDataByIdQuery,useGetDataByLimitQuery,useGetDeleteDataMutation,useCreatePostMutation}=postApi