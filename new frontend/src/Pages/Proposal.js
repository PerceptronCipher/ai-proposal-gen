function Proposal() {
  return (
    <div>
      <div className="proposal-page">
        <div className="proposal-glow"></div>
        <div className="proposal-glow1"></div>
        <p className="pheader">Proposal Architecture</p>
        <p className="pdescription">
          Generate winning proposal drafts in seconds
        </p>

        <input
          className="proposal-input1"
          type="text"
          placeholder="Paste freelance job description here."
        />
        <div>
          <button className="proposal-button">Generate Proposal</button>
        </div>
        <div className="proposal-architecture">
          <p>Proposal</p>
          <p>Pricing</p>
          <p>Risk</p>
          <p>Contract</p>
        </div>

        <textarea
          class="proposal-input2"
          placeholder="Hi [Name],
Thank you for your email. I appreciate you reaching out regarding...
I'd be happy to move forward with this...
Best regards,
[Your Name]"
        ></textarea>
      </div>
    </div>
  );
}
export default Proposal;
