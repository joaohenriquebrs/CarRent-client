import { Container } from './style';

export default function Home() {
  return <Container></Container>;
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
