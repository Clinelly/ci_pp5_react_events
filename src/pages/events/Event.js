import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/ExtraDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Event = (props) => {
  const {
    id,
    owner,
    updated_at,
    title,
    description,
    location,
    start_time,
    end_time,
    image,
    profile_id,
    profile_image,
    like_id,
    attending_id,
    likes_count,
    comments_count,
    attending_count,
    eventPage,
    setEvents,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, likes_count: event.likes_count + 1, like_id: data.id }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? { ...event, likes_count: event.likes_count - 1, like_id: null }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttending = async () => {
    try {
      const { data } = await axiosRes.post("/attending/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                attending_count: event.attending_count + 1,
                attending_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnattending = async () => {
    try {
      await axiosRes.delete(`/attending/${attending_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                attending_count: event.attending_count - 1,
                attending_id: null,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {location && <Card.Text>{location}</Card.Text>}
        {start_time && <Card.Text>{start_time}</Card.Text>}
        {end_time && <Card.Text>{end_time}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own event!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like events!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>Of course you're attending your own event!</Tooltip>
              }
            >
              <i className="fa-solid fa-circle-check" />
            </OverlayTrigger>
          ) : attending_id ? (
            <span onClick={handleUnattending}>
              <i className={`fa-solid fa-circle-check ${styles.Check}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleAttending}>
              <i
                className={`fa-regular fa-circle-check ${styles.CheckOutline}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to attend an event!</Tooltip>}
            >
              <i className="fa-regular fa-circle-check" />
            </OverlayTrigger>
          )}
          {attending_count}
          <Link to={`/events/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
