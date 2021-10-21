/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";

const Container = (props) => (
  <div
    {...props}
    sx={{
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
);

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <header
        sx={{
          width: "100%",
          variant: "layout.header",
        }}
      >
        <Container>
          <Themed.h4>
            <Themed.a as={Link} to={"/"}>
              {data.site.siteMetadata.title}
              <span className="blinking">_</span>
            </Themed.a>
          </Themed.h4>
        </Container>
      </header>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          variant: "layout.main",
        }}
      >
        <Container>{props.children}</Container>
      </main>
      <footer
        sx={{
          width: "100%",
          variant: "layout.footer",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Themed.p>
            <small>
              © {new Date().getFullYear()}, Built with
              {` `}
              <Themed.a href="https://www.gatsbyjs.com">Gatsby</Themed.a>
            </small>
          </Themed.p>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
