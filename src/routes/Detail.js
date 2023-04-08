import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BackButton from "../components/BackButton";

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
        <p>Loading...</p>
      ) : (
        <div>
          <BackGroundSection>
            <img src={movie.background_image_original} alt="poster" />
          </BackGroundSection>
          <div>
            <BackButton />
            <Navigation />
            <img src={movie.large_cover_image} alt="poster" />
            <SpanSection>
              <span>
                🎬 Title: {movie.title}, {movie.year}
              </span>
              <span>✅ Download: {movie.download_count.toLocaleString()}</span>
            </SpanSection>
          </div>
        </div>
      )}
    </MainSection>
  );
}

const MainSection = styled.div`
  position: relative;
  text-align: center;

  p {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    color: white;
  }
`;

const BackGroundSection = styled.div`
  img:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;
const SpanSection = styled.div`
  display: grid;
  margin-left: 470px;
  margin-right: 470px;
  background-color: rgb(176, 196, 222, 0.2);
  span {
    vertical-align: middle;
    display: inline-block;
    padding: 20px;
    font-size: 21px;
    font-weight: bold;
    color: white;
  }
`;

export default Detail;
