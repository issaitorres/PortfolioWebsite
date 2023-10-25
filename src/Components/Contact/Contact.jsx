import { useState, useEffect, useRef} from 'react'
import emailjs from "@emailjs/browser"
import FormInput from '../FormInput/FormInput'
import Banner from '../Banner/Banner'
import "./Contact.css"

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loader, setLoader] = useState(false)
  const [displayBanner, setDisplayBanner] = useState(false)
  const bannerRef = useRef(null)

  const displayBannerInterval = (time=0) => {
    bannerRef.current = setInterval(() => {
      if (time <= 0) {
        setDisplayBanner(false)
        clearInterval(bannerRef.current)
      }
      time--;
    }, 1000)
  }

  useEffect(()=> {
    return () => {
      clearInterval(bannerRef.current)
    }
  }, [])



  const onChange = (e) => {
    setContactData({...contactData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoader(true)
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_KEY,
      process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
      contactData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      setLoader(false)
      setContactData({
        name: "",
        email: "",
        message: ""
      })
      setDisplayBanner("Email sent!")
      displayBannerInterval(10)
    }, (err) => {
      setLoader(false)
    });
  }

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      label: "Name",
      required: true,
      errorMessage: "Name cannot be empty"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      required: true,
      errorMessage: "Email cannot be empty and must have valid format ex: test@gmail.com"
    },
    {
      id: 3,
      name: "message",
      type: "text",
      placeholder: "message",
      label: "Message",
      required: true,
      errorMessage: "Name cannot be empty",
      needtextarea: true
    },
  ]

  return (
    <div className="contact__container">
      <div className="contact">
        {
          displayBanner &&
            <Banner
              notice={displayBanner}
              bannerType="success"
              bannerPosition="fixed"
            />
          }
        <h2 id="contact">
          Contact
        </h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              value={contactData[input.name]}
              onChange={onChange}
              inputName={input.name}
              {...input} // pass all other key: values
            />
          ))}
          <div className="contact__button-flex-container">
            <button className="button contact_button">
              <div className={`${loader && 'loader'}`}>{!loader && "Send"}</div>
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact
