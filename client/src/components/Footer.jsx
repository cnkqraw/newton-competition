export default function Footer({ team }) {
  return (
    <footer className="footer">
      <h2>Project Team</h2>

      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <p className="footer-note">Built for future Newton computing competitions.</p>
    </footer>
  );
}
