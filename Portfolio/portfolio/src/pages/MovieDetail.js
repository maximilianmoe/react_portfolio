import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';
import ScrollTop from '../component/ScrollTop';

function MovieDetail() {
    const history = useHistory();
    const url = history.location.pathname;

    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        //returns an array with 1 Object -> get the one object with currentMovie[0]
        setMovie(currentMovie[0]);
    }, [movies, url]);

    console.log(movie);

//--> Only render out the below Content if the movie is available
    return(
        <>
        {movie && (
            <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </Headline>
                <Awards>
                    {movie.awards.map((award) => (
                        <Award title={award.title} description={award.description} key={award.title} />
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="Image" />
                </ImageDisplay>
                <ScrollTop />
            </Details>
        )}
        </>
    );
};

const AwardStyle = styled(motion.div)`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`

const Details = styled.div`
    color: white;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height:100vh;
        object-fit: cover;
    }

`


//Award Component
function Award({title, description}) {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
}

export default MovieDetail;