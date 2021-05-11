import { useEffect } from 'react';

import { getMovie } from '../../services/moviesAPI';
import { Cover, Row, Column, Text } from '../../util/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import BackButton from '../BackButton';

const dot = require('dot-object');

const MovieInfo = ({

}) => {

  let dispatch = useDispatch();
  let movie = useSelector(state => state.movie);
  const router = useRouter();

  useEffect(() => {
    getMovie({ search: { imdb_id: router.query.id } }).then(r => {
      dispatch(updateMovie(r.data))
    })

    return () => {
      dispatch(updateMovie({}))
    }
  }, [])

  function updateMovie(movie) {
    return { type: 'movie/info', payload: movie }
  }

  function timeConvert(time) {
    var hours = (time / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    return `${rhours}h ${rminutes}min`;
  }

  return <Column>
    <BackButton />
    <Row padding="0 0 0 15px">
      <Column width='230px' >
        <Cover url={movie.Poster} onClick={e => window.open(movie.Poster)} />
        <Text fontSize="large" width="100%" align="center" weight="bold">{`Rating: ${movie.imdbRating} / 10`}</Text>
        <Text align="center" width="100%" >{`${movie.imdbVotes} votes`}</Text>
      </Column>
      <Column margin="0 20px" width='90%'>
        <Row alignItems="center" height="fit-content" width="100%">
          <Text fontSize="title" weight="bold">{movie.Title}</Text>
          &nbsp;&nbsp;
          <Text fontSize="large">{`(${movie.Year})`}</Text>
        </Row>
        <Row width="100%">
          <Text fontSize="small">{dot.pick('Runtime', movie) ? timeConvert(movie.Runtime.split(' ')[0]) : ''}</Text>
        </Row>
        <Row height="20px" width="100%"></Row>
        <Row width="100%">
          <Text weight="bold">{`Director: `}</Text>
          &nbsp;
          <Text >{movie.Director}</Text>
        </Row>
        <Row width="100%">
          <Text weight="bold">{`Writer: `}</Text>
          &nbsp;
          <Text >{movie.Writer}</Text>
        </Row>
        <Row width="100%">
          <Text weight="bold">{`Star: `}</Text>
          &nbsp;
          <Text >{movie.Actors}</Text>
        </Row>
        <Row height="20px" width="100%"></Row>
        <Row width="100%">
          <Text weight="bold">{`Synopsis: `}</Text>
          &nbsp;
          <Text>{movie.Plot}</Text>
        </Row>
      </Column>
    </Row>
  </Column>
}

export default MovieInfo;