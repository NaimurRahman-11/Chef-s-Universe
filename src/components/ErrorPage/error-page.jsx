import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="https://as1.ftcdn.net/v2/jpg/02/57/71/98/500_F_257719878_3P2CksRfwUfIIyLZkL8iKBzVNN5yeGZY.jpg" alt="" className="rounded" />
    </div>
  );
}