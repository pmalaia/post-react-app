import React, { useState, useRef } from "react";
import PostList from './components/PostList';
import CommonButton from "./components/UI/button/CommonButton";
import CommonInput from "./components/UI/input/CommonInput";
import './styles/App.css'

function App() {

  const [posts, setPosts ] = useState([
    {id: 1, title: 'JS1', body: 'Description'},
    {id: 2, title: 'JS2', body: 'Description'},
    {id: 3, title: 'JS3', body: 'Description'},
    {id: 4, title: 'JS4', body: 'Description'},
  ])

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const AddNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now}])
    setPost({    title: '', body: ''})
  }
  return (
    <div className="App"> 
    <form>
      <CommonInput value={post.title} onChange={e => setPost({...post, title:e.target.value})} type="text" placeholder="Название поста"/>
      <CommonInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Описание поста"/>
      <CommonButton onClick={AddNewPost}>Создать пост</CommonButton>
    </form>
    <PostList posts={posts} title="Список постов 1"/>
    </div> 
  );
}

export default App;
