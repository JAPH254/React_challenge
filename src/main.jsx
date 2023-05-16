import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
function Main(){
  return(
    <div className="blog">
        <BlogContent title="Main causes of poverty" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
        <BlogContent title="Addiction of youth to social media" content="At ducimus numquam quia iusto incidunt porro. Lorem ipsum dolor sit amet"/>
        <BlogContent title="Men at work" content="A  mollitia amet quod quo culpa blanditiis accusantium distinctio repudiandae officia consequatur iusto!"/>
        <BlogContent title="Women at peace" content="Old is not gold , consectetur adipisicing elit. A libero quis, atque cum autem odit sint maiores voluptas"/>
    </div>
)  
}