import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Settings() {
    const {theme, changeTheme} = useContext(ThemeContext)

    return (
        <div className={`${theme}Theme`}>
            <ul>
                <li>Current Theme: {theme} <button onClick={changeTheme}>Change Theme</button></li>
                <li>Change password</li>
                <li>Log-out</li>
            </ul>
        </div>
    )
}
