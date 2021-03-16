import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
