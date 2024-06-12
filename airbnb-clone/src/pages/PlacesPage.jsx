import { Link } from "react-router-dom";

export default function PlacesPage() {
    return (
        <div>
            <div className="text-center">
            <Link className="inline-flex bg-red-300 text-black py-2 px-4 rounded-full" to={'/account/places/new'} >Add new place</Link>
            </div>
            {/* <h1>Places Page</h1> */}
        </div>
    )
}
