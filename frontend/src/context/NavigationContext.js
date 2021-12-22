import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const NavigationContext = createContext({});

export function NavigationProvider(props){
    const [menuActive, setMenuActive] = useState("/Home");
    const history = useHistory();

    return (
        <NavigationContext.Provider value={{menuActive, setMenuActive, history}}>
            {props.children}
        </NavigationContext.Provider>
    );
}