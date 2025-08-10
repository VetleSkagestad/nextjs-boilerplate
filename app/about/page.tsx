export default function AboutPage() {
  const members = [
    {
      name: "Studio One",
      ceo: "Alex Harper",
      logo: "https://via.placeholder.com/100",
    },
    {
      name: "Pixel Playhouse",
      ceo: "Brooke Chen",
      logo: "https://via.placeholder.com/100",
    },
    {
      name: "DreamForge",
      ceo: "Carlos Martinez",
      logo: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="container">
      <div className="about-content">
        <img
          src="https://via.placeholder.com/200"
          alt="GameDev Syndicate Logo"
          className="logo"
        />
        <div>
          <h1>About GameDev Syndicate</h1>
          <p>
            GameDev Syndicate is an alliance of passionate, independent studios committed to pushing boundaries in game design, storytelling, and player engagement. We share resources, knowledge, and support to empower each member in crafting memorable experiences.
          </p>
        </div>
      </div>

      <div className="members-grid">
        {members.map((member) => (
          <div className="member-card" key={member.name}>
            <img src={member.logo} alt={`${member.name} Logo`} />
            <h3>{member.name}</h3>
            <p>CEO: {member.ceo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
