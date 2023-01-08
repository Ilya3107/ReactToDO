import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
  const [post, setPost] = React.useState({ title: "", body: "" });

  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      <MyInput
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        value={post.title}
        placeholder={"Название поста"}
      />
      <MyInput
        placeholder={"Описание поста"}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  );
}

export default PostForm;
