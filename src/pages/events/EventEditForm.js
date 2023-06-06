import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import styles from "../../styles/EventCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Image } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function EventEditForm() {
  const [errors, setErrors] = useState({});
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    start_time: "",
    end_time: "",
  });
  const { title, description, location, image, start_time, end_time } =
    eventData;

  const imageInput = useRef(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}`);
        const {
          title,
          description,
          location,
          image,
          is_owner,
          start_time,
          end_time,
        } = data;

        is_owner
          ? setEventData({
              title,
              description,
              image,
              start_time,
              end_time,
              location,
            })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    // Format start_time and end_time
    const formattedStartTime = new Date(start_time).toISOString();
    const formattedEndTime = new Date(end_time).toISOString();

    formData.append("start_time", formattedStartTime);
    formData.append("end_time", formattedEndTime);

    try {
      await axiosReq.put(`/events/${id}`, formData);
      history.push(`/events/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form>
        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Event Name"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Event Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Start Time"
            name="start_time"
            value={start_time}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="End Time"
            name="end_time"
            value={end_time}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;
