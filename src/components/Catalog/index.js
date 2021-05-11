import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { searchMovies } from "../../services/moviesAPI";
import { AffixArea, Column, Cover, NoCover, SkeletonPulse, Text } from "../../util/theme";
const dot = require('dot-object');

const CatalogGrid = styled.div`
  display       : flex;
  flex-wrap     : wrap;
  width         : 98%;
  flex-direction: row;
  overflow-y    : auto;
  padding       : 20px 0 20px 20px;
`

const GridMovieItem = styled.div`
  display       : flex;
  flex-direction: column;
  height        : fit-content;
  width         : 230px;
  margin        : 0 30px 40px 0;

  div:hover {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2); 
  }
`

const Catalog = React.memo(({

}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { movies, filters, searching, resultAPI } = useSelector((state) => state);
  const { title, page, type, year } = filters;

  useEffect(() => {
    searchMovies({
      search: {
        title,
        page,
      }
    }).then(r => {
      setTimeout(() => {
        dispatch(updateMoviesAction(r.data))
        dispatch(loadingAction(false))
      }, 1000);
    }).catch(e => console.log('Error on searchMovies: ', e));

  }, [])

  useEffect(() => {
    searchMovies({
      search: {
        title,
        page
      }
    }).then(r => {
      setTimeout(() => {
        dispatch(updateMoviesAction(r.data))
        dispatch(loadingAction(false))
      }, 1000);
    }).catch(e => console.log('Error on searchMovies: ', e));
  }, [title, page])

  function handleClick(movie) {
    router.push(`/movie/${movie.imdbID}`)
  }

  function updateMoviesAction(movies) {
    return { type: 'search/movies', payload: movies }
  }

  const loadingAction = (payload) => {
    return { type: 'search/searching', payload }
  }

  function handleSeeMore() {
    dispatch({ type: 'search/nextPage' })
  }

  return <CatalogGrid>
    {searching &&
      ['1', '2', '3', '4'].map(movie => {
        return <GridMovieItem key={movie}>
          <SkeletonPulse height="348px" translucent={searching} />
        </GridMovieItem>
      })
    }
    {!searching &&
      <>
        {!movies &&
          <Column width="100%" alignItems="center" >
            {title.length == 0 &&
              <Text display='flex' align='center' margin='40px 0 0 0'>{`Search for a movie, TV show title or episode.`}</Text>
            }
            {title.length > 0 &&
              <>
                <Text display='flex' align='center' margin='20px 0 0 0'>{`Your search for "${title}" did not have any matches.`}</Text>
                <ul>
                  <li>Try different keywords</li>
                  <li>Looking for a movie or TV show?</li>
                  <li>Try using a movie, TV show title or episode</li>
                </ul>
              </>
            }
          </Column>
        }
        {dot.pick('length', movies) &&
          <>
            {
              movies.map(movie => {
                return <GridMovieItem key={movie.imdbID} title={movie.Title} >
                  {['N/A', '', undefined].includes(movie.Poster)
                    ? <NoCover url={movie.Poster} onClick={e => { e.preventDefault(); handleClick(movie) }} />
                    : <Cover url={movie.Poster} onClick={e => { e.preventDefault(); handleClick(movie) }} />
                  }
                  <Text align="center" weight="bold" >{movie.Title}</Text>
                </GridMovieItem>
              })
            }
            <AffixArea>
              <span className="float-button" onClick={e => handleSeeMore()}>
                <span className="float-description" weight="bold">See more</span>
                <FontAwesomeIcon className="float-icon" icon={faChevronDown} />
              </span>
            </AffixArea>
          </>
        }
      </>
    }
  </CatalogGrid>
})

export default Catalog;