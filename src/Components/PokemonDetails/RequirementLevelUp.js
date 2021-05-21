export default function RequirementLevelUp({data}) {
    return (
      <div className="flex flex-col items-center text-gray-300">
          <p>Level Up</p>
          <p>{data.min_level}</p>
        </div>
    )
  }