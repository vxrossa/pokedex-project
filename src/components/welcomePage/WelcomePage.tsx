import './pokedexAnimation.scss';

const WelcomePage = () => {
        const pokedexImgSrc = 'https://www.nicepng.com/png/full/228-2285786_pokedex-kanto-pokedex-de-kanto.png';
        return (
                <div className="mt-32 col-span-12 flex w-full gap-x-10">
                <div className="col-span-7 flex flex-col align-center justify-center basis-1/2">
                        <h1 className="text-6xl font-bold flex items-center justify-center mb-10 text-red-600">Pokédex API Project</h1>
                        <h3 className="text-xl mb-10">Gotta catch 'em all!</h3>
                        <p className="text-lg mb-10">Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. Pokémon are raised and commanded by their owners (called “Trainers”). During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon. There are currently more than 700 creatures that inhabit the Pokémon universe.</p>
                        <p className="text-lg mb-10">Pokédex is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.</p>
                        <button className="search-button text-white p-10 w-1/2 mx-auto text-xl">Let's go!</button>
                </div>
                <div className="col-span-5 w-full basis-1/2 p-10 rounded-2xl
                shadow-2xl flex items-center justify-center bg-gradient-to-t from-red-800 to-red-600">
                        <img src={pokedexImgSrc} alt="" className="pokedex-image w-full"/>
                </div>
                </div>

        )
}

export default WelcomePage;