import Button from "components/button";

export default function Form() {
  return (
    <form name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-contact" value="contact" />
      <div>
        <label htmlFor="full-name">Tell me your name please(*)</label>
        <input
          id="full-name"
          type="text"
          placeholder="Your name"
          name="full-name"
          required
        />
      </div>

      <div>
        <label htmlFor="Subject">Tell me your subject (*)</label>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
      </div>

      <div>
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
