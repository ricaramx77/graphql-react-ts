import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/queries";

// TypeScript interface for our user data
interface User {
  id: string;
  name: string;
  email: string;
}

function App() {
  // The useQuery hook handles the entire request lifecycle
  const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
    variables: { id: 1 }, // Pass our query variables
  });

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle errors
  if (error) return <p>Error fetching user: {error.message}</p>;

  const user = data?.user;

  // Handle case where no user was found
  if (!user) return <p>No user found.</p>;

  // Render the user data
  return (
    <div style={{ padding: "2rem" }}>
      <h1>👤 User Info</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default App;