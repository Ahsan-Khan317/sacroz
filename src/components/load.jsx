const Loading = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://i.pinimg.com/originals/89/a8/bb/89a8bbb1f990c36a44fc2a206d38483d.gif"
        alt="Loading..."
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#87CEEB", // sky blue
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "150px",
    height: "150px",
  },
};

export default Loading;
