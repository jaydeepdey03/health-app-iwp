import { createContext } from "react"

export const Context = createContext()

const Usercontext = (props) => {
    return (
        <Context.Provider value={{a: 10}}>
            {props.children}
        </Context.Provider>
    )
}

export default Usercontext
