import UserContainer from "./components/UserContainer";
import Container from "./components/ui/Container";

function App() {
  return (
    <div>
      <p className="bg-red-500 w-full text-red-500">p</p>
      <Container>
        <UserContainer></UserContainer>
      </Container>
    </div>
  );
}

export default App;
