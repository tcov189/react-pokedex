export default function RequirementNone({ data }) {
  console.log(data)
  let text = data.is_baby ? 'Baby' : '';

  return (
    <div className="flex flex-col items-center text-gray-300">
      <p className="text-center">{ text }</p>
    </div>
  );
}
