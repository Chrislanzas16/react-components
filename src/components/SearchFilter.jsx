import { useState } from "react";


export default function SearchFilter(){
const [query, setQuery] = useState("")

    const NAMES = [
    "Christopher",
    "Alex",
    "Maria",
    "Jordan",
    "Taylor",
    "Samuel",
    "Amanda",
    "Sophie",
    "Michael",
    "Daniel",
  ];

  const filtered = NAMES.filter((name) => 
    name.toLowerCase().includes(query.toLowerCase())
)

const onNameChange = (event) => (
    setQuery(event.target.value)
)

return (
    <div>
        <h2>Search Filter</h2>
        <input type="text"
        placeholder="Search Name Here..."
        value={query}
        onChange={onNameChange}
        />
        {query !== "" && (
              <ul>
            {filtered.map((name)=>(
                <li key={name}>{name}</li>
            ))}
            
        </ul>
        )}
        {filtered.length === 0 && <p>No Results Found</p>}
      
    </div>
)


}