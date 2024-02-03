import React, {Component} from 'react';
import TodoIistItem from '../Todo-list-item';
import "./todo-list.css"



export default class Todolist extends Component {

    render()
    {
    const {onDeleted,onItemClick,onStartEdit,onFinishEdit} = this.props
    return (
    <ul className='todo-list'>
     {this.props.elements.map(e => {
    return <TodoIistItem onFinishEdit = {(event) => {
        if (event.key === 'Enter'){
        onFinishEdit(e.id)}}} setNameEdit = {this.props.setNameEdit} id = {e.id} editing = {e.editing} onStartEdit = {(event) => {
            event.stopPropagation()
            onStartEdit(e.id)}} name={e.name} key = {e.id} onItemClick = {() => onItemClick(e.id)} completed = {e.completed} hidden = {e.hidden} onDeleted = {() => onDeleted(e.id)}/>
     })}
 </ul>
    )
}
}

