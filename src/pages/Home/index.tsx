import { Container, Typography } from "@mui/material";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ border: '1px solid gray', py: 2, px: 2 }}>
      <Header />
      <Typography variant="h2">Home</Typography>
    </Container>
  )
}