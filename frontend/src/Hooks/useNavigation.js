import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

export function useNavigation(){
    const value = useContext(NavigationContext);
    return value;
}