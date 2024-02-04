import { fetchHousingData } from "$lib/data";
import { generateSentimentForPlace } from "$lib/sentiment";

export async function load({params}) {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const place = data[params.id];
    const sentiment = await generateSentimentForPlace(place["seoName"]);
    console.log(sentiment);
    let [pros, cons] = sentiment.split("Cons:");
    console.log(pros);
    console.log(cons);

    return {pros, cons};
}