import Navbar from "../Navbar";

export default function Layout(props)  {
    return(
        <div className="container">
            <Navbar/>
            {props.children}
        </div>
    );
}