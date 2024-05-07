const shimmer = () => {
  return (
    <div>
      <div className="shimmer-container flex flex-wrap m-4 justify-around gap-10">
        {Array(12)
          .fill(null)
          .map((_) => {
            return <div className="shimmer-card w-52 bg-gray-100 h-80"></div>;
          })}
      </div>
    </div>
  );
};

export default shimmer;
