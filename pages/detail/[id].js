import React from "react";
import {useRouter} from "next/router";

const Movies = () => {
  // url = http://localhost:3000/detail/탑건
  const router = useRouter();
  const movieName = router.query.id; // router.query -> {id: '탑건'} 형식으로 받아옴

  return (
    <div>
      {movieName}
    </div>
  )
}

export default Movies;
