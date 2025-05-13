import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/queries";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  geo: Geo;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
}

export interface GetUserData {
  user: User;
}

export interface GetUserVars {
  id: string;
}

function App() {
  const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
    variables: { id: 1 }, // Pass our query variables
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error fetching user: {error.message}</p>;

  const user = data?.user;

  if (!user) return <p>No user found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>👤 User Info</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Latitud:</strong> {user.address?.geo?.lat}</p>
    </div>
  );
}

export default App;