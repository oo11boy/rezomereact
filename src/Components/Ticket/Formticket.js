import React, { useState } from "react";
import "./Ticket.css";

export default function Formticket(props) {
    const { firstname, lname, phnumber, emailer, countryy, cityy, getRndInteger, fnchangeValue, lnchangeValue, massaget,
        informCountry, setCity, phnumbervalue, emailervalue, checkC, numlist, submitTicketHandler } = props
    return (
        <>

            <div className="col box">
                {massaget != "" ? <p className="alert alert-danger">{massaget}</p> : null}

                <input className="fnameInput" value={firstname} onChange={(event) => fnchangeValue(event)} placeholder="First Name" />
            </div>

            <div className="col box">
                <input className="lnameInput" placeholder="Last Name" value={lname} onChange={(event) => lnchangeValue(event)} />
            </div>
            <div className="col box">
                <input className="phoneInput" placeholder="Phone Number" value={phnumber} onChange={(event) => phnumbervalue(event)} />
            </div>
            <div className="col box">
                <input className="emailInput" placeholder="Email" value={emailer} onChange={(event) => emailervalue(event)} />
            </div>
            <div className="col box">
                <select onChange={(event) => checkC(event)} className="countrySelect">
                    <option value="-1">Please Select ...</option>

                    {informCountry.map((item, index) => {
                        return (

                            <option value={item.namec} className="option">{item.namec}</option>


                        )
                    })}

                </select>
            </div>
            <div className="col box">
                <select onChange={(event) => setCity(event)} className="citySelect">
                    <option value="-1">Please Select ...</option>
                    {numlist === -1 ? '' :

                        informCountry[numlist].citys.map((item, index) => {

                            return <option value={item}>{item}</option>

                        })


                    }



                </select>
            </div>
            <div className="col-md-12 box">

                <button onClick={submitTicketHandler} className="btn">Book a ticket</button>
            </div>
        </>
    )
}
