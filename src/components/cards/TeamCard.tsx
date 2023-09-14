import { team } from '@/constant'

const TeamCard = () => {
  return (
    <>
      {team.map((data) => (
        <div
          className="flex flex-col place-content-center bg-white shadow-md items-center border border-gray-300 rounded-md h-72 w-60 px-5 py-10 text-center"
          key={data.id}
        >
          <img
            src={data.image}
            alt={data.name}
            className="h-36 w-36 mb-4 rounded-full object-cover border border-gray-700"
          />
          <p>{data.name}</p>
          <p>
            <strong>{data.position}</strong>
          </p>
        </div>
      ))}
    </>
  )
}

export default TeamCard
