
const SearchComponent = (props) => {
    return (
        <div>
            <input data-testid="search" type="text" placeholder="Search movies..." onChange={e => props.onSearchChange(e.target.value)} />
        </div>
    )
}

export default SearchComponent
