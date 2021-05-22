export default function RequirementLevelUp({data}) {
  let evoData = data.evolution_requirement[0];

  let text = 'Level';
  let number = evoData.min_level;

  if (evoData.min_happiness) {
    text = 'Happiness';
    number = evoData.min_happiness;
  }

  return (
      <div className="flex flex-col items-center text-gray-300">
          <p>{ text } { number }</p>
        </div>
    )
  }