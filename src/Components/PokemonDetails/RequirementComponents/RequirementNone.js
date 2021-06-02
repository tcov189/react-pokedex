export default function RequirementNone({ data }) {
  let text = data.is_baby ? 'Baby' : ' ';

  return (
    <div className="flex flex-col items-center text-gray-300">
      <p className="text-center mt-1">{ text }</p>
    </div>
  );
}
