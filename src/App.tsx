import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <div>
        <h1>My Team Portfolio</h1>

        <ProfileCard
          name = "Passapol Lukthongkum"
          role = "Student @ CEDT"
          bio = "21"
        />

        <ProfileCard
          name = "John Doe"
          role = "Guest Developer"
          bio = "I love coding and learning new things."
        />
    </div>
  )
}

export default App;