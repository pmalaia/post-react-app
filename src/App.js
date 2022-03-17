import React, { useState, useRef } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CommonSelect from "./components/UI/select/CommonSelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "dsd", body: "rrr" },
    { id: 2, title: "aaa", body: "qqq" },
    { id: 3, title: "fff", body: "nnn" },
    { id: 4, title: "kkk", body: "aaa" },
  ]);
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <CommonSelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка" 
        options={[
          {value: 'title', name: 'По названию'},
          {value:'body', name: 'По описанию'}
        ]}/>
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
