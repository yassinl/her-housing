import { fetchHousingData } from "$lib/data";
import { generateSentimentForPlace } from "$lib/sentiment";
import { calculateCommute } from "../../../lib/commute.js";
import { safeScore } from "../../../lib/safety.js";

/**
 * Remove unwanted characters from an array of strings
 * @param {string[]} inputArray - Array of strings to clean
 * @returns {string[]} Cleaned array of strings
 */
function removeUnwantedCharacters(inputArray) {
    // Define the regex pattern to match HTML tags, *, and -
    const regexPattern = /<[^>]*>|[*-]|^\s*\d+\.\s*|\n/g;
  
    // Function to apply the regex pattern and remove unwanted characters
    /** @param {string} inputString */
    const removeUnwantedChars = (inputString) => inputString.replace(regexPattern, '');
  
    // Map over the array and apply the function to each string
    const resultArray = inputArray.map(removeUnwantedChars);
  
    return resultArray;
}

/**
 * Load apartment data
 * @param {{ params: { id: string } }} context - SvelteKit load context
 */
export async function load({ params }) {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const place = data[params.id];

    // Check if place exists and has seoName property
    if (!place) {
        throw new Error(`Apartment with id ${params.id} not found`);
    }

    const seoName = place["seoName"] || "";
    console.log(seoName.split("Now")[0]);
    
    const sentiment = await generateSentimentForPlace(seoName.split("Now Accepting")[0] || seoName || "Default apartment");
    // console.log(sentiment);
    let [pros, cons] = [["No user feedback received"], ["No user feedback received"]];
    try {
        if (sentiment && typeof sentiment === 'string') {
            const sentimentParts = sentiment.split("Cons:");
            if (sentimentParts.length >= 2) {
                let prosText = sentimentParts[0];
                let consText = sentimentParts[1];

                pros = prosText.split('\n');
                pros = removeUnwantedCharacters(pros).filter((x) => x.trim() != "");
                cons = consText.split('\n');
                cons = removeUnwantedCharacters(cons).filter((x) => x.trim() != "");
            }
        }
    } catch (ex) {
        console.error("Unexpected error occurred:", ex);
    }

    let imageUrl;
    if(place["media"]["images"][0]["source"] != null) {
        imageUrl = place["media"]["images"][0]["source"];
    } else if(place["media"]["mainPhoto"]["source"] != null) {
        imageUrl = place["media"]["mainPhoto"]["source"];
    } else {
        imageUrl = "static/placeholder.webp"
    }
    imageUrl = imageUrl.replace(/{options}/g, '117');

    const address = place["geography"]["streetAddress"];
    const description = place["propertyType"];
    const rentPrice = place["floorPlanSummary"]["price"]["formatted"];

    const latitude = place["geography"]["latitude"];
    const longitude = place["geography"]["longitude"];
    const safety = await safeScore(latitude, longitude);

    const [_, commuteTime] = await calculateCommute(place["geography"]["streetAddress"] + " Blacksburg, Virginia");

    const amenities = place["amenityGroups"].map(/** @param {any} entry */ (entry) => {
        return {name: entry["categoryName"], items: entry["items"]};
    });

    const phone = place["leads"]["phone"]["formatted"];

    return { pros, cons, imageUrl, address, description, rentPrice, safety, commuteTime, amenities, phone };
}