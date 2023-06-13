import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularEvents = ({ mobile }) => {
  const [popularEventsData, setPopularEventsData] = useState({
    pageEvent: { results: [] },
    popularEvents: { results: [] },
  });
  const { popularEvents } = popularEventsData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/events/?ordering=-attending_count"
        );
        setPopularEventsData((prevState) => ({
          ...prevState,
          popularEvents: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularEvents.results.length ? (
        <>
          <p>Most Popular Events</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularEvents.results.slice(0, 4).map((event) => (
                <p key={event.id}>{event.title}</p>
              ))}
            </div>
          ) : (
            popularEvents.results.map((event) => (
              <p key={event.id}>{event.title}</p>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularEvents;
