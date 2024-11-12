import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { getMovies, getMoviesResult } from "../api";
import { makeImagePath } from "../uitls";

const Container = styled.div`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.lighter};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.red};
  font-size: 22px;
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 20px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string | undefined }>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.1, y: -50, transtion: { delay: 0.5, tpye: "tween" } },
};

const mockdata = [1, 2, 3, 4, 5, 6];

const offset = 6;

const Home = () => {
  const { data, isLoading } = useQuery<getMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      variants={boxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      whileHover="hover"
                      initial="normal"
                    >
                      {movie.title}
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
