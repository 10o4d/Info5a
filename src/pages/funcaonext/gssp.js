import { Container } from "react-bootstrap"

export async function getServerSideProps() {
  // Fetch data from external API
  
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}
 
export default function Gssp({ repo }) {
  return (
    <Container className="text-center">
      <h1>Server Side Props</h1>
      <p>{repo.name}</p>
            <p>{repo.owner.login}</p>
                  <p>{repo.license.name}</p>
                  <p>{repo.topics[1]}</p>



      </Container>
      
    
    
  )
}