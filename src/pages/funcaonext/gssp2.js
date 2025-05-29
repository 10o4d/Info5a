import { Container } from "react-bootstrap"

export async function getServerSideProps() {
  // Example data (you can replace this with a real API call or logic)
  const repo = {
    name: "Info A",
    owner: "FW1",
    stars: 132139,
  };

  return { props: { repo } };
}

export default function Gssp2({ repo }) {
  return (
    <Container className="text-center">
      <h1>Server Side Props - 2</h1>
      <p><strong>Repository:</strong> {repo.name}</p>
      <p><strong>Owner:</strong> {repo.owner}</p>
      <p><strong>Stars:</strong> ⭐ {repo.stars}</p>
    </Container>
  );
}
