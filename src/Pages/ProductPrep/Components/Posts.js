import React from "react";

const Posts = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {data.map((data) => (
        <li key={data.id} className="list-group-item">
          {data.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
