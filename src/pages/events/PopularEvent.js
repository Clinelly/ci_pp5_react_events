import React from "react";
import styles from "../../styles/Profile.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const PopularEvent = (props) => {
  const { event, mobile } = props;
  const { id } = event;



  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/events/${id}`}>
          <p className={`mx-2 ${styles.WordBreak}`}>
            <strong>{event.title}</strong>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PopularEvent;
