import React, { memo, useEffect } from "react";
import axios from "axios";
const Home = memo(() => {
  useEffect(() => {
    axios(`/api/getList`).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>dasdsa</div>;
});

export default Home;
