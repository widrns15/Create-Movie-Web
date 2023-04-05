import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MainSection>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt="poster" />
          <p>
            🎬 Title: {movie.title}, {movie.year}
          </p>
          <p>✅ Download: {movie.download_count}</p>
        </div>
      )}
    </MainSection>
  );
}

const MainSection = styled.div`
  position: relative;
  text-align: center;
  h1 {
    margin-top: 360px;
  }
`;

export default Detail;
