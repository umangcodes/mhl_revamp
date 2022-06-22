import React,{useEffect, useState} from 'react'
function AddLocations() {
    const [area, setArea] = useState();
    const [labId, setLabId] = useState();
    const [address1, setAddress1] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [postalCode, setPostalCode] = useState();
    const [phone, setPhone] = useState();
    const [fax, setFax] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const location = {
            area: area,
            labId:labId,
            address1:address1,
            city:city,
            province:province,
            postalCode:postalCode,
            phone:phone,
            fax:fax
        }
        console.log(location)
    }

    useEffect(()=>{
    })
  return (
    <div className="min-h-screen">
        <div className='mx-2 my-5'>Add New Locations:</div>
        <form className='lg:grid lg:grid-cols-3 lg:gap-5 my-5 mx-5 border-2 border-black px-5 py-5 rounded-3xl'>
            <div classname=" " id="area">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>Area:</label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder="Area" value={area}  onChange={async(e) => { setArea(e.target.value)}}/>
            </div>

            <div classname=" " id="LabId">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>LabId</label>
                <input type="text" placeholder="labId" value={labId}  onChange={(e) => {setLabId(e.target.value)}}/>
            </div>

            <div classname=" " id="address1">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>address1:</label>
                <input type="text" placeholder="address1" value={address1}  onChange={(e) => {setAddress1(e.target.value)}}/>
            </div>

            <div classname=" " id="city">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>city:</label>
                <input type="text" placeholder="city" value={city}  onChange={(e) => {setCity(e.target.value)}}/>
            </div>

            <div classname=" " id="province">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>province:</label>
                <input type="text" placeholder="province" value={province}  onChange={(e) => {setProvince(e.target.value)}}/>
            </div>

            <div classname=" " id="postalCode">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>postalCode:</label>
                <input type="text" placeholder="postalCode" value={postalCode}  onChange={(e) => {setPostalCode(e.target.value)}}/>
            </div>

            <div>
            <span>Contact Info</span>
            <div classname="" id="Phone">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>Phone:</label>
                <input type="text" placeholder="Phone" value={phone}  onChange={(e) => {setPhone(e.target.value)}}/>
            </div>
            <div classname="" id="Fax">
                <label className='block text-gray-700 py-2 text-sm font-bold mb-2'>Fax:</label>
                <input type="text" placeholder="Fax" value={fax}  onChange={(e) => {setFax(e.target.value)}}/>
            </div>
            </div>
            
            <div className='my-10'>
                <span>Hours of Operations</span>
                <div className='mx-4'>
                    <div>
                    <span className='font-semibold'>Mon:</span>
                        {/* create dropdown component */}
                        
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Tue:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Wed:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Thur:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Fri:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Sat:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span className='font-semibold'>Sun:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>
                </div>
                <span>Select time slot for appointments: </span>
                <div className='mx-4'>
                    dropdown menu
                </div>
            </div>

            <button className="px-2 border rounded-full my-5 mt-5 h-8 w-24 hover:shadow-xl" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default AddLocations