import { Link } from "react-router-dom"
export default function Menubar() {
    

    return (
        <>
            
            <div className="text-center">

                <Link to='/' className="font-bold">Home</Link>
                <Link to='#' className="font-bold">About</Link>
                <Link to='#' className="font-bold">Market</Link>
                <Link to='/signup' className="font-bold">Signup</Link>
                

                
            </div>
            

        
        
        
        </>
    )
}