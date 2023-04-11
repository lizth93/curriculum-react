import Button from "components/button";
import styled from "styled-components";
import { Props } from "types";

function Form(props: Props) {
  return (
    <form
      className={`${props.className} contact-form`}
      name="contact"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="contact-fields">
        <label htmlFor="full-name">Tell me your name please(*)</label>
        <input
          id="full-name"
          type="text"
          placeholder="Your name"
          name="full-name"
          required
        />
      </div>

      <div className="contact-fields">
        <label htmlFor="Subject">Tell me your subject (*)</label>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
      </div>

      <div className="contact-fields">
        <label htmlFor="message">Your message(*)</label>
        <input
          id="message"
          type="text"
          placeholder="Message"
          name="message"
          required
        />
      </div>
      <Button className="btn btn--form" type="submit">
        Send
      </Button>
    </form>
  );
}

export default styled(Form)`
  .contact {
    &-fields {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
