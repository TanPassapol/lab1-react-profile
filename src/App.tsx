import ProfileCard from "./components/ProfileCard"
import { useState, useEffect } from 'react'; 

function App() {
  const [githubData, setGithubData] = useState<any>(null);
  const username = "TanPassapol"

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      setGithubData(data);
    })
    .catch(err => console.error(err));
  }, [])

  // Light/Dark Mode
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  // Skills
  const [skills, setSkills] = useState(['React', 'TypeScript']);
  const [newSkill, setNewSkill] = useState("");
  
  const addSkill = () => {
    if (newSkill.trim() !== ""){
      setSkills([...skills,newSkill]);
      setNewSkill("");
    } 
  };

  return (
    <div className={theme} style={{ textAlign: 'center', minHeight: '100vh', width: '500px' }}>
        <h1>My Team Portfolio</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        {githubData ? (
          <ProfileCard
            name = {githubData.name || githubData.login}
            role = "GitHub User"
            bio = {githubData.bio || "No bio avaliable"}
          />
        ) : (
          <p>Loading data from GitHub...</p>
        )}

        <input style = {{marginTop: '20px'}}
        value = {newSkill}
        onChange = {(e) => setNewSkill(e.target.value)}
        placeholder = "Add a skill"
        />
        <button onClick = {addSkill}>Add Skill</button>
        <ul>
          {skills.map((skill, index) => (
            <li style={{margin: '5px', textAlign: 'left'}} key = {index}>{skill}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;