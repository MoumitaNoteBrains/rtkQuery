import CreateData from "./components/CreateData"
import GetData from "./components/GetData"
import GetDataById from "./components/GetDataById"
import GetDatabyLimit from "./components/GetDatabyLimit"
import { useGetDeleteDataMutation } from "./services/post"


function App() {
  const [deletePost,responseInfo]=useGetDeleteDataMutation()
  // console.log(responseInfo)


  return (
 <div>
  moumita
  {/* <GetData/>
  <GetDataById/> */}
  <GetDatabyLimit/>

  <h2>button delet</h2>
<button onClick={()=>{deletePost(2)}}>Delete Post</button>
<CreateData/>
 </div>
  )
}

export default App
