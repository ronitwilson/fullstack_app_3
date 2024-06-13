import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action} = useParams()
    // console.log('action', action)
    return (
        <div>
        {action !== 'new' && (
            <div className="text-center gap-3">
                <Link className="inline-flex bg-red-300 text-black py-2 px-4 rounded-full" to={'/account/places/new'} >Add new place</Link>
            </div>
        )}
        {action === 'new' && (
            <form>
                
            </form>
        )}
        </div>
    )
}
