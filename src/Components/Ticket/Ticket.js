import React, { useState } from "react";
import "./Ticket.css";
import Tableticket from "./Tableticket";
import Formticket from "./Formticket";
import AboutText from "../About/AboutText";
export default function Ticket() {
    const [informCountry, setinformCountry] = useState(
        [
            {
                namec: 'iran',
                citys: ['kermanshah', 'Tehran', 'Qom']

            },
            {
                namec: 'Usa',
                citys: ['Los Angeles', 'Chicago', 'Washengton DC']

            },
            {
                namec: 'England',
                citys: ['Manchester', 'Londen', 'Liverpol']

            },
        ]
    );


    const [firstname, setfirstname] = useState('')

    const [lname, setlname] = useState('')
    const [phnumber, setphnumber] = useState('')

    const [emailer, setemailer] = useState('')


    const [numlist, setnumlist] = useState(-1)
    const [countryy, setCountryy] = useState('')
    const [cityy, setcityy] = useState('')
    const checkC = (event) => {
        setCountryy(event.nativeEvent.target.value)
        if (event.nativeEvent.target.value === "iran") {
            setnumlist(0)

        }
        if (event.nativeEvent.target.value === "Usa") {
            setnumlist(1)

        }
        if (event.nativeEvent.target.value === "England") {
            setnumlist(2)

        }

    }
    const setCity = (event) => {


        setcityy(event.nativeEvent.target.value)

    }
    const fnchangeValue = (event) => {
        setfirstname(event.nativeEvent.target.value)
    }
    const lnchangeValue = (event) => {
        setlname(event.nativeEvent.target.value)
    }
    const phnumbervalue = (event) => {
        setphnumber(event.nativeEvent.target.value)
    }
    const emailervalue = (event) => {
        setemailer(event.nativeEvent.target.value)
    }
    const [Status, setStatus] = useState(false)
    const [massaget, setmassaget] = useState('')
    const submitTicketHandler = () => {

        if (firstname && lname && phnumber && emailer && countryy && cityy != "") {
            setStatus(true)
        } else {
            setStatus(false)
            setmassaget('لطفا تمام گزینه ها را پر کنید')
        }
    }

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <>

            <div className="containerTicket" dir="rtl">
                <div className="bodyticket">
                
                    <div className=" ticketform">
                        {Status === true ?

                            <Tableticket getRndInteger={getRndInteger} firstname={firstname} lname={lname} phnumber={phnumber} emailer={emailer} countryy={countryy} cityy={cityy} />

                            :
                            <Formticket massaget={massaget} firstname={firstname} lname={lname} lnchangeValue={lnchangeValue} fnchangeValue={fnchangeValue}
                                phnumber={phnumber} phnumbervalue={phnumbervalue} emailer={emailer} emailervalue={emailervalue} countryy={countryy} checkC={checkC}
                                informCountry={informCountry} getRndInteger={getRndInteger} setCity={setCity} numlist={numlist} submitTicketHandler={submitTicketHandler}
                            />
                        }

                    </div>
               
                        <AboutText titr="Buy Ticket">
                           
Discover a seamless way to book your flight tickets on our user-friendly website!

With access to over 100 reputable airlines, we offer an extensive range of options for your travel needs. Take advantage of exclusive deals and discounts to your favorite destinations.

Rest assured that your payments are safe and secure with our trusted payment gateway. Our dedicated customer support team is available 24/7 to assist you with any queries or concerns you may have.

Say goodbye to the hassle and stress of booking flights. Experience convenience and peace of mind when you reserve your tickets with us.

Don't miss out on the best travel deals! Visit our website now and embark on your next adventure with ease.
                        </AboutText>
                    </div>
                </div>
           
        </>
    )

}
