"use client"
import { PokemonCard } from "./card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link"

import { useLocation } from "react-router-dom";
interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [selected, setSelected] = useState("");
    console.log(pokemonList);

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }


    const filteredPokemonList = searchFilter(pokemonList);
    function gopage({ selected }) {

    }

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
        gopage({ selected });
    }; if ({ selected }) { }
    return (
        <>

            <select value={selected} onChange={handleSelectChange}>

                {
                    filteredPokemonList.map((pokemon: any) => {
                        return (
                            <>
                             


                                <option key={pokemon.name} value={pokemon.name} > {pokemon.name} </option>



                            </>

                        )
                    })
                }



            </select >



            <Link
                href={selected}
                className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                key={selected + "Card"}
            >
                <h2 className={`text-2xl font-semibold`}>


                    {selected ? <h1> {selected}</h1> : <h1>انتخاب کنید</h1>}







                </h2>

            </Link>
















        </>
    )
}