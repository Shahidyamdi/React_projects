import { Carousel } from "./Layout/Homepage/Carousel"
import { ExploreTopBooks } from "./Layout/Homepage/ExploreTopBooks"
import { Heros } from "./Layout/Homepage/Heros"

export const Homepage =() =>{
    return(
        <>
        <ExploreTopBooks/>
        <Carousel/>
        <Heros/>
        </>
    );
}