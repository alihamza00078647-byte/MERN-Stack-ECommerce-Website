import assets from "../assets/assets";


function Add () {
    return (
        <form>
            <div >
                <p className="mb-2 flex flex-col w-full items-start gap-3">Upload Image</p>

                <div className="flex gap-2">
                    <label htmlFor="image1">
                        <img className="w-20" src={assets.upload_area}  />
                        <input type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className="w-20" src={assets.upload_area}  />
                        <input type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className="w-20" src={assets.upload_area}  />
                        <input type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className="w-20" src={assets.upload_area}  />
                        <input type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Product Name</p>
                <input className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here." />
            </div>

            <div className="w-full">
                <p className="mb-2">Product Description</p>
                <textarea className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write Content here." />
            </div>
        </form>
    )
}

export default Add;