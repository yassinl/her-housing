import { fetchHousingData } from "$lib/data";
import { generateSentimentForPlace } from "$lib/sentiment";
import { calculateCommute } from "../../../lib/commute.js";
import { safeScore } from "../../../lib/safety.js";

function removeUnwantedCharacters(inputArray) {
    // Define the regex pattern to match HTML tags, *, and -
    const regexPattern = /<[^>]*>|[*-]|^\s*\d+\.\s*|\n/g;
  
    // Function to apply the regex pattern and remove unwanted characters
    const removeUnwantedChars = (inputString) => inputString.replace(regexPattern, '');
  
    // Map over the array and apply the function to each string
    const resultArray = inputArray.map(removeUnwantedChars);
  
    return resultArray;
}

export async function load({ params }) {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const place = data[params.id];

    console.log(place["seoName"].split("Now")[0])
    const sentiment = await generateSentimentForPlace(place["seoName"].split("Now Accepting")[0]);
    // console.log(sentiment);
    let [pros, cons] = [["No user feedback received"], ["No user feedback received"]];
    try {
        [pros, cons] = sentiment.split("Cons:");


        pros = pros.split('\n');
        pros = removeUnwantedCharacters(pros).filter((x) => x.trim() != "");
        cons = cons.split('\n');
        cons = removeUnwantedCharacters(cons).filter((x) => x.trim() != "");
    } catch (ex) {
        console.error("Unexpected error occured");
    }

    let imageUrl;
    if(place["media"]["images"][0]["source"] != null) {
        imageUrl = place["media"]["images"][0]["source"];
    } else if(place["media"]["mainPhoto"]["source"] != null) {
        imageUrl = place["media"]["mainPhoto"]["source"];
    } else {
        imageUrl = "static/placeholder.webp"
    }

    const address = place["geography"]["streetAddress"];
    const description = place["propertyType"];
    const rentPrice = place["floorPlanSummary"]["price"]["formatted"];

    const latitude = place["geography"]["latitude"];
    const longitude = place["geography"]["longitude"];
    const safety = await safeScore(latitude, longitude);

    const [_, commuteTime] = await calculateCommute(place["geography"]["streetAddress"] + " Blacksburg, Virginia");

    const amenities = place["amenityGroups"].map((entry) => {
        return {name: entry["categoryName"], items: entry["items"]};
    });

    const phone = place["leads"]["phone"]["formatted"];

    return { pros, cons, imageUrl, address, description, rentPrice, safety, commuteTime, amenities, phone };
}