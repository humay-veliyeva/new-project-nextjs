import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Azerbaijan - Baku</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>anvarkhalid@info</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+994 50 792 85 18</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://www.youtube.com/channel/UCYxNlKIkl4N-YFw73H_be1w" target="_blank">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/anvar-muzaffarli/" target="_blank">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/anvar-khalid-874b4b1ba" target="_blank">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="
https://www.instagram.com/anvarkhalid1/" target="_blank">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
