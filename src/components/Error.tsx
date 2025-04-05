export default function Error({ message }: { message?: string }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p className="text-md font-semibold text-red-700">
        {message || "Something went wrong. Try again later."}
      </p>
    </div>
  );
}
