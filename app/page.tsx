import { PokemonGrid } from '@/components/grid'
import { PokemonCard } from '@/components/card'
import Image from 'next/image'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {

  const pokemonList = await getPokemonList();
 
  return (
      <PokemonGrid pokemonList={pokemonList}/>
  )
}
