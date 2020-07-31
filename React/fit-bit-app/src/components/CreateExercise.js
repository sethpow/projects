import React, { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function CreateExercise() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    const inputRef = useRef('userInput')

    useEffect(() => {
        setUsers({
            [users]: ['test user'],
            [username]: 'test username'
        })
    })

    const changeUsername = (e) => {
        setUsername({
            [username]: e.target.value
        })
    }

    const changeDescription = (e) => {
        setDescription({
            [description]: e.target.value
        })
    }

    const changeDuration = (e) => {
        setDuration({
            [duration]: e.target.value
        })
    }

    const changeDate = (date) => {
        setDate({
            date
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const exercise = {
            username,
            description,
            duration,
            date
        }
        console.log(exercise)

        window.location = '/'
    }

    // const allUsers = users.map(user => {
    //     return (
    //         <option
    //             key={user}
    //             value={user}
    //         >
    //             {user}
    //         </option>
    //     )
    // })

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select 
                        ref={inputRef}
                        required
                        className='form-control'
                        value={username}
                        onChange={changeUsername}
                    >
                        {/* {allUsers} */}
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input
                        type='text'
                        required
                        className='form-control'
                        value={description}
                        onChange={changeDescription}
                    />
                </div>
                <div className='form-group'>
                    <label>Duration (mins): </label>
                    <input
                        type='text'
                        className='form-control'
                        value={duration}
                        onChange={changeDuration}
                    />
                </div>
                <div className='form-group'>
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={changeDate}
                        />
                    </div>
                </div>

                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Exercise Log'
                        className='btn btn-primary'
                    />
                </div>

            </form>
        </div>
    )
}