import dynamic from "next/dynamic";

const Home = dynamic(() =>
  import("../components/home-page").then((mod) => mod.HomePage)
);

export default Home;
