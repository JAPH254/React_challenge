import Footernote from "./components/footernote"
import Headernote from "./components/headernote"
import BlogContent from './components/content'
import Rightbar from './components/Rightbar'
function App(){
  return(
    <>
    <div className="control">
    <div className="head">
      <Headernote />
    </div>
    <div className="body">
    <BlogContent />
    <Rightbar />
    </div>
    <Footernote />
    </div>
    </>
  )
}
export default App
