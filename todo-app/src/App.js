import React, { useState, useMemo } from "react";

import "./styles/App.scss";

import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "JavaScript", body: "Description 3" },
    { id: 2, title: "JavaScript 2", body: "Description 2" },
    { id: 3, title: "JavaScript 3", body: "Description 1" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("function finished");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  // For search post

  ////////
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyInput
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search"
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchPosts}
          title={"Список постов 1"}
          remove={removePost}
        />
      ) : (
        <div>Посты не найдены!</div>
      )}
      <PostForm create={createPost} />
    </div>
  );
}

export default App;
