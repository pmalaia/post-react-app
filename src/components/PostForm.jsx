import CommonInput from "./UI/input/CommonInput"
import CommonButton from "./UI/button/CommonButton"
import { useState } from "react"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({    title: '', body: ''})
      }
      return (
      <form>
      {/*Управляемый компонент*/}
      <CommonInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста"
      />
      {/*Неуправляемый\Неконтролируемый компонент*/}
      <CommonInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Описание поста"
      />
      <CommonButton onClick={addNewPost}>Создать пост</CommonButton>
  </form>
      )
}

export default PostForm;