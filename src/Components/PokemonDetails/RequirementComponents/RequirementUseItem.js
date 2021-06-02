export default function RequirementUseItem({ data }) {
    let evoData = data.evolution_requirement[0];

    let itemName = evoData.item.name.replace(/\w+/g, function (w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      }).replace('-', ' ');

    return (
        <div className="flex flex-col items-center text-gray-300">
          <p className="text-center mt-1">{ itemName }</p>
        </div>
      );
}
