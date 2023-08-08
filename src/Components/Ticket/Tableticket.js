import React, { useState } from "react";
import "./Ticket.css";

export default function Tableticket(props) {

    const {firstname,lname,phnumber,emailer,countryy,cityy,getRndInteger}=props
    return (
        <div className="col-12 box">
            <div>

                <div className="alert alert-light text-end">



                    <label className="text-center w-100 mb-4 fs-4">اطلاعات دریافت شده</label>

                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">نام خانوادگی</th>
                                    <th scope="col">شماره تماس</th>
                                    <th scope="col">آدرس ایمیل</th>
                                    <th scope="col">کشور مقصد</th>
                                    <th scope="col">شهر مقصد</th>
                                    <th scope="col">کد رهگیری</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{firstname}</td>
                                    <td>{lname}</td>
                                    <td>{phnumber}</td>
                                    <td>{emailer}</td>
                                    <td>{countryy}</td>
                                    <td>{cityy}</td>
                                    <td>{getRndInteger(105585, 5241322)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
