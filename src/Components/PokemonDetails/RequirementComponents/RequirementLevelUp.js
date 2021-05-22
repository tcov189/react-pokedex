export default function RequirementLevelUp({data}) {
  let evoData = data.evolution_requirement[0];

  let text = 'Level Up';
  let number = evoData.min_level;

  if (evoData.min_happiness) {
    text = 'Level Up';
    number = evoData.min_happiness;
  }


  return (
      <div className="flex flex-col items-center text-gray-300">
          <p>{ text }</p>
          <p>{ number }</p>
        </div>
    )
  }