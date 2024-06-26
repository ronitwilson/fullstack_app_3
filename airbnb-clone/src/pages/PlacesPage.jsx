import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action} = useParams()
    // console.log('action', action)

    function inputHeader(text){
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }

    function inputDescription(text){
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        )
    }

    function preInput(header, description){
        return(
            <>
            {inputHeader(header)}
            {inputDescription(description)}
            </>
        )

    }

    return (
        <div>
        {action !== 'new' && (
            <div className="text-center gap-3">
                <Link className="inline-flex bg-red-300 text-black py-2 px-4 rounded-full" to={'/account/places/new'} >Add new place</Link>
            </div>
        )}
        {action === 'new' && (
            <form>
                {preInput('Title', 'Title for your place')}
                <input type='text' placeholder="title"></input>
                {preInput('Address','Address for your place')}
                <input type='text' placeholder="address"></input>
                {preInput('Photos','more the better')}
                <div className="flex gap-2">
                    <input type='text' placeholder="add uning link"></input>
                    <button className="rounded-2xl px-4">Add&nbsp;phtoto</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-7 mt-2">
                <button className="border rounded-2xl p-3 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3"  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg> 
                    &nbsp;upload
                </button>
                </div>
                {preInput('Description','description of the place')}
                <textarea></textarea>
                <h2> Perks </h2>
                <p className="text-gray-500 text-sm">select all possible perks</p>
                <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
                        <label className="border p-4 items-center">
                            <input type="checkbox"/>
                            <span>&nbsp;Wifi</span>
                        </label>
                        <label className="border p-4 items-center">
                            <input type="checkbox"/>
                            <span>&nbsp;Free Parking spot</span>
                        </label>
                        <label className="border p-4 items-center">
                            <input type="checkbox"/>
                            <span>&nbsp;TV</span>
                        </label>
                        <label className="border p-4 items-center">
                            <input type="checkbox"/>
                            <span>&nbsp;Pets</span>
                        </label>
                        <label className="border p-4 items-center">
                            <input type="checkbox"/>
                            <span>&nbsp;Private entrance</span>
                        </label>
                    </div>
                <h2> Extra info </h2>
                <p className="text-gray-500 text-sm">House roule</p>
                <textarea></textarea>
                <h2> Check in&out time, max guests </h2>
                <p className="text-gray-500 text-sm">add check in/out times</p>
                <div className="grid gap-2 sm:grid-cols-3">
                    <div>
                        <h3 className="mt-2 mb-1">Check in time</h3>
                        <input type="text"/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Check out time</h3>
                        <input type="text"/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Max guests</h3>
                        <input type="text"/>
                    </div>
                </div>
                <div>
                    <button className=" mt-2 primary">Save</button>
                </div>
            </form>
        )}
        </div>
    )
}
