import useFetch from "./useFetch";

const Menu = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading Menu...</p>;
  if (error) return <p>Error loading menu: {error}</p>;
  if (!data || data.length === 0) return <p>No menu items found.</p>;

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default Menu;
