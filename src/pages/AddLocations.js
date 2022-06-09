import React from 'react'

function AddLocations() {
  return (
    <div className="h-screen">
        <form >
            <div classname="" id="area">
                <label>Area:</label>
                <input type="text" placeholder="Area"/>
            </div>

            <div classname="" id="LabId">
                <label>LabId</label>
                <input type="text" placeholder="labId"/>
            </div>

            <div classname="" id="address1">
                <label>address1:</label>
                <input type="text" placeholder="address1"/>
            </div>

            <div classname="" id="city">
                <label>city:</label>
                <input type="text" placeholder="city"/>
            </div>

            <div classname="" id="province">
                <label>province:</label>
                <input type="text" placeholder="province"/>
            </div>

            <div classname="" id="postalCode">
                <label>postalCode:</label>
                <input type="text" placeholder="postalCode"/>
            </div>

            <span>Contact Info</span>
            <div classname="" id="Phone">
                <label>Phone:</label>
                <input type="text" placeholder="Phone"/>
            </div>
            <div classname="" id="Fax">
                <label>Fax:</label>
                <input type="text" placeholder="Fax"/>
            </div>
            
            <div>
                <span>Hours of Operations</span>
                <div>
                    <div>
                    <span>Mon:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Tue:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Wed:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Thur:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Fri:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Sat:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>

                    <div>
                    <span>Sun:</span>
                        {/* create dropdown component */}
                        dropdown 1
                        dropdown 2
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddLocations