"use client"
import { PokemonCard } from "./card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link"

import '../app/globals.css'
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


    const handleSelectChange = (event: any) => {
        setSelected(event.target.value);

    }; if ({ selected }) { }
    return (
        <>


            <h className={`pokemon-header text-2xl font-semibold`}>

                اپ نمایش ویژگی های پوکمون
                <br>
                </br>
                روش کار : ابتدا نام پوکمون را انتخاب کنید

                <br>
                </br>
                سپس یک  لینک برای ورود به صفحه نمایش پوکمون مورد نظر به شما خواهد داد
                <br>
                </br>



            </h>


            <select value={selected} onChange={handleSelectChange}>

                {filteredPokemonList.map((pokemon: any) => {
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



                <div className="pokemon-box text-2xl text-bold">
                    <p className="pokemon-box text-bold">select a pokemon
                    </p></div>


                <h className={`   pokemon-link text-2xl font-semibold`}>


                    {selected ?
                        <><h>
                            <h> روی لینک زیر کلیک نمایید</h>
                            <br>
                            </br>
                            {selected}


                        </h>

                        </>
                        : ''}



                </h>



            </Link>
















        </>
    )
}