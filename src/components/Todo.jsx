const Todo = ({ item, clickRemove, clickDone }) => {
  return (
    <div key={item.id} className='todo-container'>
      <div>
        <h2 className='todo-title'>{item.title}</h2>
        <div>{item.content}</div>
      </div>
      <div className='button-set'>
        <button className='todo-delete-button button' onClick={() => clickRemove(item.id)}>삭제</button>
        <button className='todo-complete-button button' onClick={() => clickDone(item.id)}>완료</button>
      </div>
    </div>
  )
}

export default Todo