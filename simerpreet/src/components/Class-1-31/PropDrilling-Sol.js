import React, { createContext, useContext, useState } from "react";

const Context = createContext()

export const PropSolution = () => {
    const [theme, setTheme] = useState({
        dark: "Black",
        light: "White",
    })

    const handleChange = (theme) => {
        setTheme(theme)
    }
    const themeContext = {
        theme,
        handleChange
    }

    return (<>
        <Context.Provider value={themeContext}>
            <Child />
        </Context.Provider>
    </>)

}
const Child = () => {

    return (<><GrandChild1 /> </>)

}
const GrandChild1 = () => {
    const { theme, handleChange } = useContext(Context)
    return <> Grand Child1 Theme {theme.dark} {theme.light}
        <button onClick={() => handleChange({ dark: "Dark Blue", light: "Light Blue" })}>Change Child1 Theme</button>
        <GrandChild2 /></>
}
const GrandChild2 = () => {
    const { theme, handleChange } = useContext(Context)
    return <><br /> Grand Child2 Theme {theme.dark} {theme.light} <button onClick={() => handleChange({ dark: "Dark Green", light: "Light Green" })}>Change Child2 Theme</button></>
}