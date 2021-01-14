import Head from "next/head";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Warehouse</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/materia/bootstrap.min.css"
        />
      </Head>
      {/* Parent div needs explicitly defined height/width in order for the AutoSizer to work properly */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
