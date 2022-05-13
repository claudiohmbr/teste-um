
import Pagination from "components/Pagination"

import MovieCard from "components/MovieCard"
function Listing() {
    return (
        <>
            <Pagination />
           { /*Colunas dos cards*/}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col sl-3 mb-3">
                       <MovieCard />
                    </div>
                </div>
            </div>

            
        </>
    )
}


export default Listing