import { fetchHousingData } from "$lib/data";
import { generateSentimentForPlace } from "$lib/sentiment";

export async function load({ params }) {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const place = data[params.id];

    const sentiment = await generateSentimentForPlace(place["seoName"]);
    // console.log(sentiment);
    let [pros, cons] = [["pros"], ["cons"]];
    try {
        [pros, cons] = sentiment.split("Cons:");


        pros = pros.split('\n').filter((x) => x.trim() != "");
        cons = cons.split('\n').filter((x) => x.trim() != "");
    } catch (ex) {
        console.error("cannot do thing");
    }

    let imageUrl;

    if (place["media"] == null) {
        imageUrl = "none.jpg";
    } else {
        imageUrl = place["media"]["mainPhoto"]["source"];
    }

    const address = place["geography"]["streetAddress"];
    const description = place["propertyType"];
    const rentPrice = place["floorPlanSummary"]["price"]["formatted"]

    return { pros, cons, imageUrl, address, description, rentPrice };
}