import { useEffect, useState } from "react"
import { getData } from "./api";

const SearchResultsComponent = (props) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const {text, location} = props.search;
        const isSearch = text?.length > 0 || location?.length > 0  ? true : false;
        const params = {
            location,
            movie: text || undefined
        };
        getData(params, isSearch).then(res => {
            const _data = res.data;
            setResults(_data);
        }, (err) => {})
    },[props]);

    return (
        <div>
            {results?.length > 0 && <ul>
                {
                    results.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>}
            {results?.length == 0 && <div>No Results</div>}
        </div>
    )
}

export default SearchResultsComponent
