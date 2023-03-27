import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

export default function Root(){
    return (
        <div >
             <Sidebar/>
            <Outlet />
        </div>
    )
}