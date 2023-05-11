import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

const TodoList =() => {
  const [data, setData] = useState("");
  const [newItem, setNewItem] = useState([])

  const addingItems=() => {
  
    const item = {
      id: Math.floor(Math.random() * 9999),
      value: data
    };

    if(!data){
      return alert("You didn't write ANYTHING!");
    }

    setNewItem(theList => theList.concat(item));
  
    setData(""); // Limpiamos el campo de texto
  }


  return (
    <>
      {/* Comenzando a crear la estructura */}
      <div className='col-5 text-center title'>
        <h1 className='pulse'>TODO LIST</h1>
        <br />
      </div>
      <div className='contenedor col-8 mx-auto  text-center pulse'>
        <input className='me-3'
          type='text' placeholder='What I have to do?' value={data} onChange={(e) => setData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addingItems()
          }
        }} />

        <button className='addBTN' onClick={() => addingItems()}>Add</button>

        {/* Añadiendo funcionalidad al código */}
        <ul className='d-flex justify-content-center'>
          <div className='d-flex flex-column '>
            {newItem.map((e) => {
              return (
                <li className='theLi d-flex justify-content-between mb-1' key={e.id}>{e.value}<button 
                onClick={() => {setNewItem(theList => theList.filter(item => item.id !== e.id))}} style={{ marginLeft: '3rem' }}><button className='eraser'><FontAwesomeIcon  icon={faEraser} /></button>
                  </button>
                </li>
              );
            })}
          </div>
        </ul>
        <div className='col-8'><p className='-flex'>{newItem.length} tasks</p></div>

      </div>
    </>
  )
}
export default TodoList;