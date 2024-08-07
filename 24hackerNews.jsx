import * as React from "react";

 
  
    const fetchData = async ({ query = query, page = 0, tag = "" }) => {
      return fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
          tag
        )}&page=${page}`
      )
        .then((response) => response.json())
        .then((json) => ({
          results: json.hits || [],
          pages: json.nbPages || 0,
          resultsPerPage: json.hitsPerPage || 20
        }));
    };

    export default function HackerNewsSearch() {
      const [query, setQuery] = React.useState("");
      const [results, setResults] = React.useState([]);
      const [tag, setTag] = React.useState("story");
      const [page, setPage] = React.useState(0);
      const [resultsPerPage, setResultsPerPage] = React.useState(0);
      const [totalPages, setTotalPages] = React.useState(50);
      const [loading, setLoading] = React.useState(false);

   React.useEffect(() => {

    //Ignore stale requests
    let ignore = false 

    const handleFetchData = async () => {
      setLoading(true)
      setResults([])

      //Invoque fetchData passing the variables we need results, pages and resultsPerPages
      const {results,pages, resultsPerPage} = await fetchData ({
      query,
      page,
      tag
    })

    //if ignore is true we just want to return, not update our state with stale values
    if (ignore === true) return

    //Update our state with the values we recieved
    setTotalPages(pages)
    setResults(results)
    setLoading(false)
    setResultsPerPage(resultsPerPage)
  }

  handleFetchData()

  return () => {
    ignore = true
  }
}, [query,tag,page])
    


  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <h1>Hacker News Search</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Search Hacker News..."
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <select id="tag" name="tag" onChange={handleTag} value={tag}>
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>

        <header>
          <h2>
            <span>
              {/* If the pages are 0 show no results otherwise show the # of pages */}
              {totalPages === 0
                ? "No Results"
                : `Page ${page + 1} of ${totalPages}`}
            </span>
          </h2>
          <div>
            {/* If the page is less or equal to 0 the button is disabled*/}
            <button
              className="link"
              onClick={handlePrevPage}

              disabled={page <= 0}
            >
              Previous
            </button>
            {/* If the page is more or equal to the total pages the button is disabled*/}
            <button
              className="link"
              onClick={handleNextPage}
              disabled={page + 1 >= totalPages}
            >
              Next
            </button>
          </div>
        </header>
        <ul>
          {results.map(({ url, objectID, title }, index) => {
            const href =
              url || `https://news.ycombinator.com/item?id=${objectID}`;

            const position = resultsPerPage * page + index + 1;
            

            return (
              <li key={objectID}>
                <span>{position}.</span>
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
