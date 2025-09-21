import './App.css';

function App() {
  return (
     <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
  {/* Header */}
  <header style={{ textAlign: 'center', marginBottom: '40px' }}>
    <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: '0' }}>
      Hi, I'm Francis Ochiagha
    </h1>
    <p style={{ fontSize: '20px', color: '#555', marginTop: '10px' }}>
      A Software Developer/Engineer | Specialization in AI and web applications
    </p>
  </header>

      {/* Resume */}
      <section style={{ marginTop: '40px' }}>
        <h2>My Resume</h2>
        <iframe
          src="/Francis SD.pdf"
          width="100%"
          height="800px"
          title="Resume"
          style={{ border: "1px solid #ccc", marginTop: "20px" }}
        ></iframe>
      </section>

      {/* Project Case Study */}
      <section style={{ marginTop: '60px' }}>
        <h2>Project Case Study: Alumni-Obituary Data Matching</h2>

        {/* Cards */}
        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          <div style={cardStyle}>
            <h3>Overview</h3>
            <p>
              Developed a system to match alumni data with obituary records using AI-assisted scoring and web scraping techniques. 
              Focused on improving automation, accuracy, and reporting for university donor relations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>My Role</h3>
            <ul>
              <li>Led project planning using Scrum methodology (2-week sprints, iterative reviews)</li>
              <li>Implemented data scraping, preprocessing, and matching system</li>
              <li>Created documentation, presentations, and proof-of-concept deliverables</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3>Methodology</h3>
            <p>
              Agile/Scrum workflow: sprint planning, daily standups, iterative development, testing, and final integration.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Deliverables</h3>
            <ul>
              <li>Web scraping module for obituary data</li>
              <li>Data matching engine with AI scoring</li>
              <li>Technical documentation and presentation</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: '40px' }}>
          <h3>Project Timeline (Scrum Sprints)</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={timelineItemStyle}>
              <strong>Sprint 1:</strong> Requirements gathering, scope definition, initial setup
            </li>
            <li style={timelineItemStyle}>
              <strong>Sprint 2:</strong> Web scraping module development and testing
            </li>
            <li style={timelineItemStyle}>
              <strong>Sprint 3:</strong> Data matching engine implementation and AI integration
            </li>
            <li style={timelineItemStyle}>
              <strong>Sprint 4:</strong> Testing, optimization, documentation, and final presentation
            </li>
          </ul>
        </div>

        {/* Download Button */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="/Project Proposal 2.pdf" download>
            <button style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
              Download Full Project Proposal
            </button>
          </a>
        </div>
      </section>

      <section style={{ marginTop: '60px' }}>
  <h2>Data Matching Notebook</h2>
  <iframe
    src="https://nbviewer.org/github/francis518/portfolio/blob/main/my-app/public/notebook.ipynb"
    width="100%"
    height="1200px" // increase height for full content
    style={{ border: 'none' }}
    title="Data Matching Notebook"
  ></iframe>
</section>

    </div>
  );
}

// Styles
const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

const timelineItemStyle = {
  padding: '10px 0',
  borderLeft: '4px solid #4CAF50',
  marginLeft: '10px',
  marginBottom: '10px',
  position: 'relative'
};

export default App;
