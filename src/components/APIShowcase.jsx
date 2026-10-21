function APIShowcase({key}) {
    /*
        The main interactable part of this site, showcasing one random game. 
        Users can click on the attributes (stretch: +tags) around the game
        description to prevent games with those attributes from showing up
        when a new random game is chosen. Denied attributes/tags can also be
        removed from the denylist by clicking on their entries in the sidebar.

        - key (string): The RAWG API key.
    */

    // NOTE: Uh... so apparently, NSFW games are included on RAWG's database. Makes sense given that Steam includes those,
    //       but that's going to need immediate denylist addition for this project so nobody gets flashed.
    const absoluteFilters = [
        {
            "type":     "tags",
            "value":    "nudity"
        },
        {
            "type":     "tags",
            "value":    "hentai"
        },
        {
            "type":     "tags",
            "value":    "nsfw"
        },
        {
            "type":     "tags",
            "value":    "sex"
        },
        {
            "type":     "tags",
            "value":    "ero"
        },
        {
            "type":     "tags",
            "value":    "adult"
        },
        {
            "type":     "publishers",
            "value":    "nutaku"
        },
    ]
    const [denylist, setDenylist] = useState(new Set(absoluteFilters))
    const [deniedGames, setDeniedGames] = useState(new Set())
    // Stretch feature: A list for parameters to include in the search. Must not have conflicts with any denied parameters.
    // Ex. searchlist and denylist cannot both have "tags: singleplayer"
    // const [searchlist, setSearchlist] = useState(new Set())
    const [history, setHistory] = useState(new Set())

    const [art, setArt] = useState("")
    const [desc, setDesc] = useState("")
    const [esrbRating, setESRBRating] = useState("")
    const [genre, setGenre] = useState("")
    const [isTBA, setIsTBA] = useState("")
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    // Stretch feature: Add tags, make them add-able to denylist
    // const [tags, setTags] = useState([])

    // Handle search logic here, not in App.
    // Information in React only flows from parent to child.

    function denyGame(id) {
        // Adds a game to the memo of denied games given its ID.
        // Assumes filters have already been applied in later functions.
    }

    // Seems like the route of just getting a random game repeatedly until
    // one passes the filters is the better way to go. RAWG API doesn't have
    // parameters for selecting based on rating (score or ESRB).
    // NOTE: "upper" defaults to 901262 on behalf of RAWG touting that many searchable games.

    async function getGame(filters=denylist, startPage=1, pageSize=10) {
        /*
            Fetches a set of games from RAWG, then returns one random game that meets all the criteria given as a set "filters".

            - filters (set(Filter(type, value))): The set of filters to apply, like minimum/maximum score, ratings, etc.
        */
       // Arbitrary upper limit, but with page size maxed out at 40 games per page, there are about 22500 pages possible.
       if(startPage < 1 || startPage >= 22500) {
            console.error("Start page OOB")
       }

        const url = "https://api.rawg.io/api/games"
        // 
        let query = `?key=${key}&page=${startPage}&page_size=${pageSize}`

        // Once you've got the filter structure set,
        // Go one by one applying them as query parameters to "query".
        /*
        for f in filters {
            let newParam = `${f.name, or whatever the param is in RAWG's docs}`
            Do some checks based on name:
                Ex. If f = ("rating", "M"), 

        }
        */

        try {
            const response = await fetch(url)
        }
        catch (error) {

        }
    }

    function addHistory(adder) {
        /*
            Add the most recently shown game to this session's history.
            Clicking a seen game showcases it again.
        */
       setHistory(history.add(adder))
    }

    function denyAttr(denied) {
        /*
            Add a given attribute or tag "denied" to the denylist if allowed.
            Additions that would make searches impossible (e.g., isTBA = true AND isTBA = false)
            are invalid, and will not be added.

            - denied (tuple -> (name, value))
        */
    }
    
    return (
        <div className="showcase">
            {/* Flexbox this div pls, make the buttons easy for you */}
            <div className="attrBar">
                <button id="attrGenre" onClick></button>
                <button id="attrRating"></button>
                <button id="attrReleaseDate"></button>
                <button id="attrESRB"></button>
            </div>
            <img src={art}></img>
            <div className="description">

            </div>
        </div>
    )
}

export default APIShowcase