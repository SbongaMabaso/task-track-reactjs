import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setreminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setreminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <labael>Task</labael>
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <labael>Day & Time</labael>
                <input type='text' placeholder='Add Day & Time'
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <labael>Set Riminder</labael>
                <input type='checkbox'  
                value={reminder} onChange={(e) => setreminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Value'
            className='btn btn-block' />
        </form>
    )
}

export default AddTask
