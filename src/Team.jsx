import { useState } from "react"

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = ()=>{
    const newTeam = team + 1;
    setTeam(newTeam)
}
  const handleRemove = ()=>{
    const newTeam = team - 1;
    setTeam(newTeam)
}


  const teamstyle={
    border: '2px solid green',
    margin: '15px',
    padding: '20px',
    borderRadius: '20px',
  
  
}

  return (
    <div style={teamstyle}>
      <h3>Plyers:{team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}