import axios from "axios"
import { useEffect, useState } from "react"

const PokeCard = ({url, name}) => {
  
  const [pokemon, setPokemons] = useState()

  useEffect(() => {
    fetchPokeDetailData()
  }, [])

  async function fetchPokeDetailData() {
    try {
      const response = await axios.get(url)
      const pokemonData = formatPokemonData(response.data)
      setPokemons(pokemonData)
    }catch(error) {
      console.error(error)
    }
  }

  function formatPokemonData(params) {
    const {id, types, name} = params
    const PokeData = {
      id, 
      name, 
      types: types[0].type.name
    }
    return PokeData
  }

  const bg = `bg-${pokemon?.type}`
  const border = `bg-${pokemon?.type}`
  const text = `bg-${pokemon?.type}`
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`

  return (
    <>
      {
        pokemon && 
        <a href={`/pokemon/${name}`} className={`box-border rounded-lg ${border} w-[8.5rem] h-[8.5rem] z-0 bg-slate-800 justify-between items-center`}>
          <div className={`${text} h-[1.5rem] text-xs w-full pt-1 px-2 text-right rounded-t-lg`}>
            #{pokemon.id.toString().padStart(3, '00')}
          </div>
          <div className={`w-full f-6 flex items-center justify-center`}>
            <div className={`box-border relative flex w-full h-[5.5rem] basis justify-center items-center`}>
              <img src={img} alt={name} width="100%" className={`object-contain h-full`}></img>
            </div>
          </div>
          <div className={`${bg} text-xs text-zinc-100 h-[1.5rem] rounded-b-lg uppercase font-medium pt-1`}>
            {pokemon.name}
          </div>
        </a>
      }
    </>
  )
}

export default PokeCard