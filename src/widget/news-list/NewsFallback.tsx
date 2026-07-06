export const NewsFallback = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"></div>
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="relative z-10 max-w-lg text-center">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800"
          alt="Happy dog"
          className="mx-auto h-64 w-64 rounded-full object-cover shadow-xl ring-8 ring-white"
        />

        <h2 className="mt-8 text-4xl font-bold text-gray-900">No news found</h2>

        <p className="mt-4 text-gray-600">
          Looks like this little friend couldn't find any matching articles. Try
          searching with different keywords.
        </p>
      </div>
    </div>
  );
};
