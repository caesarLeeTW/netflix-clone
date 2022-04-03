import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

const Footer = ({ children, ...resProps }) => (
  <Container {...resProps}>{children}</Container>
);

Footer.Row = ({ children, ...resProps }) => <Row {...resProps}>{children}</Row>;
Footer.Column = ({ children, ...resProps }) => (
  <Column {...resProps}>{children}</Column>
);
Footer.Link = ({ children, ...resProps }) => (
  <Link {...resProps}>{children}</Link>
);
Footer.Title = ({ children, ...resProps }) => (
  <Title {...resProps}>{children}</Title>
);
Footer.Text = ({ children, ...resProps }) => (
  <Text {...resProps}>{children}</Text>
);
Footer.Break = ({ children, ...resProps }) => (
  <Break {...resProps}>{children}</Break>
);

export default Footer;
