import {useState, useEffect} from 'react';
import {getData} from './api';

const LocationComponent = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
       getData().then(res => {
           const _data = [];
           res.data.forEach(item => {
               if(_data.indexOf(item.location) === -1) {
                _data.push(item.location);
               }
           })
           setLocations(_data);
           props.onLocationChange(_data[0]);
       }, (err) => {})
    }, [])

    return (
        <div>
            <select placeholder="Select Location" onChange={e => props.onLocationChange(e.target.value)} >
                {
                    locations.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default LocationComponent
