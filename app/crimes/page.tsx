'use client'
import React from "react";

export default function Results() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-15 md:container md:mx-auto">
            <div className="flex">
                <div className="p-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2"> Over deze pagina: </h1>
                        <p>
                            Overal in nederland vinden er misdrijven plaats. <br/>
                            Op deze pagina kunt u alle informatie over misdrijven van een bepaalde gemeente zien. <br/>
                            Zo is er de totaal geregistreerde misdrijven, dit zijn misdrijven die bij
                            de politie geregistreerd zijn. <br/> Het aantal fysiek gemaakte aangiften en het aantal
                            aangiften dat online is gemaakt.
                        </p>
                    </div>
                    <div className={"btn-results p-1"}>
                        <button className={"btn btn-back"} type={"button"}><a href={"../"}>Terug</a></button>
                    </div>
                </div>
                <div className="results p-4">

                </div>
            </div>
        </div>
    )
}