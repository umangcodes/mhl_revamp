import React,{useEffect, useState} from 'react'
import emailjs from "@emailjs/browser"

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false)
    // const [phoneNumber, setPhoneNumber] = useState()
    // const [formError, setFormError] = useState();
    // const checkPhoneNumber = (number) =>{
    //     const isValid = validator.isMobilePhone(number.toString())
    //     console.log(isValid)
    //     return (isValid)
    // }
    // useEffect(()=>{
    //     checkPhoneNumber(phoneNumber)
    // })
    const sendEmail = async() =>{
      setSending(true)
      const resp = await emailjs.send(process.env.REACT_APP_emailJs_serviceID, process.env.REACT_APP_emailJs_template, emailObject, process.env.REACT_APP_emailjs_publicKey)
      setSending(false)
    } 
    const emailObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    }
    const resetForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      console.log("reset form clicked.")
      console.log(`templateID: ${process.env.REACT_APP_emailJs_template}`)
      console.log(`emailID: ${process.env.REACT_APP_emailJs_serviceID}`)

    }

    const submitForm = (e) => {
      e.preventDefault()
      console.log(emailObject)
      sendEmail()
      console.log("Submit form clicked.")


    }
  return (

    <div className="h-screen">
      <div className={sending ? "visible" : "invisible"}>Sending your data please wait...</div>
      <div className={sending ? "invisible" : "visible"}>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5 my-5">
          <div className="text-center font-bold text-3xl" >Contact Us</div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="" method="">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="subject"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    onClick={submitForm}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          Send us an email at info@mhlab.ca
          or call us at 416
        </div>
        </div>
    </div>
  )
}

export default ContactUs