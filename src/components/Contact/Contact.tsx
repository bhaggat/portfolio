import React, { useRef, useState } from "react";
import "./Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");
    try {
      if (name && email && message) {
        setIsLoading(true);
        const res = await fetch("http://13.233.156.34/api/send-email", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }).then(function (res) {
          return res.json();
        });
        console.log("res", res);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (er) {
      console.log(er);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          {/* <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p> */}
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Name"
                slotProps={{
                  htmlInput: {
                    sx: {
                      zIndex: 100,
                    },
                  },
                }}
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Enter you email address?"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                slotProps={{
                  htmlInput: {
                    sx: {
                      zIndex: 100,
                    },
                  },
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email address" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              slotProps={{
                htmlInput: {
                  sx: {
                    zIndex: 100,
                  },
                },
              }}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              {isLoading ? <CircularProgress /> : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
