export default function RequirementTrade({data}) {
  let evoData = data.evolution_requirement[0];

  let text = 'Trade';

  if (evoData.held_item) {
    let itemName = evoData.held_item.name.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    }).replace('-', ' ');

    text += ` w/ ${itemName}`;
  }

  return (
      <div className="flex flex-col items-center text-gray-300">
          <p className="text-center mt-1">{text}</p>
        </div>
    )
  }