import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieCardsList extends Component {
    render() {
        const { profiles, users, movies } = this.props;
        const usersByMovie = {};

        profiles.forEach(profile => {
            const movieID = profile.favoriteMovieID;

            if (usersByMovie[movieID]) {
                usersByMovie[movieID].push(profile.userID);
            } else {
                usersByMovie[movieID] = [profile.userID];
            }
        });

        const movieCards = Object.keys(movies).map(id => (
            <MovieCard
              key={id}
              users={users}
              usersWhoLikedMovie={usersByMovie[id]}
              movieInfo={movies[id]}
              />  
        ))

        /*
        Return JSX
        */
       return <u>{movieCards}</u>
    }
}

export default MovieCardsList;