import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Results = ({ date, pincode }) => {
        const [output, setOutput] = useState({});

        async function getData() {
                let url = new URL('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin');
                let data = { 'pincode': pincode, 'date': date };
                url.search = new URLSearchParams(data).toString();
                let response;
                if (date != '' && pincode != '') {
                        response = await fetch(url);
                        let ans = await response.json();
                        setOutput(ans.sessions);
                }
        }

        useEffect(getData);

        return (
                <div className='output-page'>
                        <div className="output ">
                                {output.length &&
                                        output.map(function (item) { return <OutDiv centerData={item} /> })
                                }
                        </div>
                        <Link to='/'> <button className="back-button">Back</button> </Link>
                </div>
        );
}

export default Results;

const OutDiv = ({ centerData }) => {
        return (
                <div className='out-div'>
                        <h3 className='bigheading heading'>Name:</h3> {centerData.name} <br />
                        <h3 className='smallheading heading'>Address:</h3> {centerData.address} <br />
                        <h3 className='smallheading heading'>Vaccine:</h3> {centerData.vaccine} <br />
                        <h3 className='smallheading heading'>Dose1:</h3> {centerData.available_capacity_dose1} <br />
                        <h3 className='smallheading heading'>Dose2:</h3> {centerData.available_capacity_dose2}
                </div>
        );
}



