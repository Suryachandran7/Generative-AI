import {Link} from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oops! Something went wrong.</p>
      <a href="/" className="btn btn-success">Go back to Home</a>
      <Link to="/" className="btn btn-danger">Go back to Home</Link>
    </div>
  );
}
export default Error;