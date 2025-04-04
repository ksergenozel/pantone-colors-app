export default function Error() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p className="text-lg font-semibold text-red-700">
        An error occurred while fetching colors. Please try again later.
      </p>
    </div>
  );
}
