export default function Error({ message }: { message?: string }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p className="text-lg font-semibold text-red-700">
        {message || "An error occurred while fetching data."}
      </p>
    </div>
  );
}
