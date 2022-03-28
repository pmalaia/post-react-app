import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

import "./styles/App.css";
import CommonModal from "./components/UI/modal/CommonModal";
import CommonButton from "./components/UI/button/CommonButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)




  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <CommonButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>Create post</CommonButton>
      <CommonModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </CommonModal>

      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      />
    </div>
  );
}

export default App;
