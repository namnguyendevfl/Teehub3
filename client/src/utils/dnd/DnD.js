import React, { useEffect, useRef } from "react";
import  useState  from 'react-usestateref'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { topcs } from "../localStorage/notebooks";
// import { ntbks } from "../data/notebooks";

const Grab = () => <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="currentColor" 
                        class="bi bi-hand-index" viewBox="0 0 16 16">
                        <path 
                        d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                        </svg>

const DnD = (props) => {
    const {
      notebooks,
      chapters,
      topics,
      optionsEdited,
      setOptionsEdited,
      count, 
      setCount,    
    } = props
    let data = () => {
      if (notebooks) return notebooks
      if (chapters) return chapters
      if (topics) return topics
    }
    const [ list, setList ] = useState(data()); 
    const [ selectedItem, setSelectedItem, selectedItemRef ] = useState()
   
    const change = useRef();
    const handleChange = ({target : {name, value}}) => {
        setSelectedItem((preV) => ({
            ...preV,
            [name] : value
        }))
        let index;
        list.forEach((item, idx) => {
          if (item.id === selectedItem.id){
            index = idx
          }
        })
        list.splice(index,1,selectedItemRef.current)
        change.current = true
    }    
    const selectedItemId = (selectedItem) ? selectedItem.id : undefined   
    useEffect(() => {       
      setList(() => list);
      //Save it if any changes occur even though there is no dragging
      setOptionsEdited(() => list);
      change.current = false;
    },[count, change.current])

    const handleClick = (e, item) => {
      e.preventDefault();
      setSelectedItem((prevItem) => {
        const prevIdx = (prevItem) ? prevItem.id - 1 : null
        if (list[prevIdx]) { 
          list[prevIdx].title  = prevItem.title
        }      
        return item});             
    }
    const handleDragEnd = (param) => {
        const srcI = param.source.index;
        const desI = param.destination?.index;
        const srcId = list[srcI].id
        const desId = list[desI]?.id  
        list[desI].id = srcId;
        list[srcI].id = desId;
        if (desI || desI === 0) {
          if (selectedItemId) {
            if(selectedItemId === srcId) {           
              selectedItem.id = desId;
              list.splice(srcI, 1)
              list.splice(desI, 0, (selectedItem) ? selectedItem : list.splice(srcI, 1));          
              setSelectedItem(() => null)
            } else if (selectedItemId === desId) {         
                selectedItem.id = srcId;          
                list.splice(desI, 1, selectedItem)             
                if (srcI < desI) { 
                  list.splice(desI + 1, 0, list[srcI])
                  list.splice(srcI, 1)  
                } else {              
                  list.splice(desI, 0, list[srcI])
                  list.splice(srcI + 1, 1) 
                }                           
                setSelectedItem(() => null)   
            } else {
              list.splice(selectedItemId-1,1,selectedItem)
              list.splice(desI, 0, list.splice(srcI, 1)[0]) 
            }                          
          } else {
            list.splice(desI, 0, list.splice(srcI, 1)[0])    
          };
        }
        setCount((prev) => prev + 1)    
        setList(() => {
          list.forEach((item, idx) => item.id = idx+1)
          return list
        })
        setOptionsEdited(() => list);
      }

  return (  
      <DragDropContext
      onDragEnd={(param) => handleDragEnd(param)}
      >
        <div className="">
        <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <ul className = "list-group" 
                ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}                
                  >
                    {(provided, snapshot) => (
                      <li 
                        className = "p-0 m-0 list-group-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                            color: "#444444",
                        }}
                      >
                        <div className = "d-flex justify-content-between align-items-center me-2 ">                               
                            <form 
                                  className = "d-flex w-100"
                                  >
                                <input
                                        className = "list-group-item w-100 px-3 text-start w-100"
                                        id = "title"
                                        name = "title"
                                        placeholder = "Write a notebook title"                              
                                        value = {(selectedItemId === item.id) ? selectedItem.title : item.title}
                                        onChange = {handleChange}                    
                                        onClick = {(e) => handleClick(e,item)}
                                    >
                                    </input>             
                                </form>
                                <div    className = "ntbkBtn "
                                        {...provided.dragHandleProps} 
                                        >
                                        {Grab()}
                                </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>  
  );
};

export default DnD;
