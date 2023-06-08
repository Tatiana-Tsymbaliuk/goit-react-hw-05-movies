const Searchbar=({ onSearch, onChange, value })=>{
return(
                <div>
                <form onSubmit={onSearch}>
                 <input
                    className="SearchForm-input"
                    type="text"
                    name="query"
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                  />
        <button type="submit" onSubmit={onSearch}>
                  <span >Search</span>
                  </button>
                  </form>
              </div>      
        )
}
export default Searchbar;