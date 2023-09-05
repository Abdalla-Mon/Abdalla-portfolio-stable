export default function Footer() {
  return (
    <footer>
      <div className="img-container ">
        <img src="./landing-imgs/face-port-1.png" />
      </div>{" "}
      <h3>Abdalla</h3>
      <p>
        Made with love by{" "}
        <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          AbdallaMon
        </span>
      </p>
    </footer>
  );
}
