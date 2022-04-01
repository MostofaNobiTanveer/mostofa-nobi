import classes from "../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <section className={classes.topbar}>

    <div className="container">
      <div className={classes.logo}>
        <h1>Mostofa Nobi</h1>
        <p>Web App Developer</p>
      </div>
    </div>
    </section>
  );
};

export default Topbar;
