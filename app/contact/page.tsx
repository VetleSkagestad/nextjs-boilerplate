export default function ContactPage() {
  return (
    <section className="container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form action="mailto:contact@gamedevsyndicate.com" method="post" encType="text/plain">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
