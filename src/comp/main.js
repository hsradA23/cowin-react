import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const MainPage = ({ setFn }) => {
        const [date, setDate] = useState('');
        const [pincode, setPincode] = useState('');

        const [dateStr, setDateStr] = useState('');
        const [go, setGo] = useState(false);

        useEffect(() => {
                let arr = date.split('-');
                let temp = ''

                temp = arr.length > 2 ? arr[2] + '-' + arr[1] + '-' + arr[0] : '';

                setDateStr(temp);

        }, [date]);

        const handleSubmit = (e) => {
                e.preventDefault();
                if (dateStr == 0 || pincode == 0) {
                        alert("Please enter the data correctly");
                }
                else {
                        setFn(dateStr, pincode);
                        setGo(true);
                };
        }

        return (
                <div className='main-page'>
                        <h1>Find vaccine centers:</h1>
                        <form onSubmit={handleSubmit}>
                                <label>
                                        Pincode
                                        <input type='number' value={pincode} onChange={(e) => { setPincode(e.target.value) }} />
                                </label>
                                <label>
                                        Date
                                        <input type='date' value={date} onChange={(e) => { setDate(e.target.value) }} />
                                </label>
                                <input type='submit' value='Find Centers' />
                        </form>
                        {go &&
                                <Redirect to='result' />
                        }
                </div>
        );
}

export default MainPage;
