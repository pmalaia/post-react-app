import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

import "./styles/App.css";
import CommonModal from "./components/UI/modal/CommonModal";
import CommonButton from "./components/UI/button/CommonButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "dsd", body: "rrr" },
    { id: 2, title: "aaa", body: "qqq" },
    { id: 3, title: "fff", body: "nnn" },
    { id: 4, title: "kkk", body: "aaa" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log("компутед");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
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
