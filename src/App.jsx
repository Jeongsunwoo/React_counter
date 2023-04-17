import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Todo from './components/Todo';
import Todos from './components/Todos';

const App = () => {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const titleChange = (event) => {
    setTitle(event.target.value)
  }
  const contentChange = (event) => {
    setContent(event.target.value)
  }
  const clickHandler = () => {
    //새로운 형태의 객체 생성 (추가하기 기능)
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      done: false
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setContent('')
  }

  //삭제 버튼 기능
  const clickRemove = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }

  //false ture 구분 기능
  const clickDone = (id) => {
    const newTodo = todos.map(item => {
      if (item.id === id) {
        return {
          ...item, done: !item.done,
        }
      } else {
        return { ...item }
      }
    })
    setTodos(newTodo);
  }

  return (
    <div className='layout'>
      <div className='container'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className='add-form'>
        <div className='input-group'>
          제목 : <input className='add-input' type='text' value={title}
            onChange={titleChange} />
          내용 : <input className='add-input' type='text' value={content}
            onChange={contentChange} />
        </div>
        <button className='add-button' onClick={clickHandler}>추가하기</button>
      </div>

      <div className='list-container'>
        <h2 className='list-title'>Working..❤️‍🔥</h2>
        <div className='list-wrapper'>
          {
            todos.map(item => {
              if (!item.done) {
                return (
                <Todo 
                key={item.id} 
                item={item} 
                clickRemove={clickRemove} 
                clickDone={clickDone} />
                )
              }
            })
          }
        </div>
        <h2 className='list-title'>Done..🥳</h2>
        <div className='list-wrapper'>
          {
            todos.map(item => {
              if (item.done) {
                return (
                  <Todos
                  key={item.id} 
                  item={item} 
                  clickRemove={clickRemove} 
                  clickDone={clickDone} />
                  )
              }
            })
          }
        </div>
      </div >
    </div >
  )
};


export default App;