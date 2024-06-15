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
                <h2 className="text-2xl mt-4"> Title </h2>
                <p className="text-gray-500 text-sm">Title for your plance</p>
                <input type='text' placeholder="title"></input>
                <h2> Address </h2>
                <p className="text-gray-500 text-sm">Address for your place</p>
                <input type='text' placeholder="address"></input>
                <h2> Photos </h2>
                <p className="text-gray-500 text-sm">more the better</p>
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
                <h2> Description </h2>
                <p className="text-gray-500 text-sm">discription of the place</p>
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
            </form>
        )}
        </div>
    )
}
