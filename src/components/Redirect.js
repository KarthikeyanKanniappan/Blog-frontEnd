import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div
      className="container mt-5 d-flex justify-content-center"
      style={{ fontFamily: "Ubuntu Condensed" }}
    >
      <h5>Redirecting in {count} seconds</h5>
    </div>
  );
};

export default Redirect;
