import * as React from "react";
import { useState } from "react";

 const SubscribeForm = () => {
    const [status, setStatus] = React.useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
  
    const FORM_URL = `the URL you created in the previous section`
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
  
      const data = new FormData(event.target as HTMLFormElement)
  
      try {
        const response = await fetch(FORM_URL, {
          method: "post",
          body: data,
          headers: {
            accept: "application/json",
          },
        })
  
        setEmail("")
        const json = await response.json()
  
        if (json.status === "success") {
          setStatus("SUCCESS")
          return
        }
      } catch (err) {
        setStatus("ERROR")
        console.log(err)
      }
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setName(value)
    }
  
    return (
      <div className="pt-0">
        {status === "SUCCESS" && (
            <><p>
                    {/* Welcome aboard{name ? `, ${name}` : ""}{" "} */}
                    <span role="img" aria-label="Ship">
                        🚢
                    </span>
                </p><p>Please check your inbox to confirm the subscription!</p></>
        )}
        {status === "ERROR" && (
            <><p>Oops, something went wrong...</p><p>
                    Please,{" "}
                    <button onClick={() => setStatus(null)}>try again.</button>
                </p></>
        )}
        {/* onSubmit={handleSubmit} */}
        {status === null && (
            <form action="https://mgmtimber.us15.list-manage.com/subscribe/post?u=385bafbd480f5865266cc45d9&amp;id=afed42f339" method="post" id="mc-embedded-subscribe-form" target="_blank" name="mc-embedded-subscribe-form">
              {/* <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={handleNameChange}
                value={name}
              /> */}
              <input
                className="inputfrom"
                aria-label="Your email address"
                name="email_address"
                placeholder="Enter your email address"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
              />
              
              <button className="subscribButton">SUBSCRIBE</button>
              
            </form>
        )}
      </div>
    )
  }

  export default SubscribeForm;