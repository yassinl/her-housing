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
    
    // Only attempt sentiment analysis if we have a meaningful place name
    let sentiment = null;
    const placeName = seoName.split("Now Accepting")[0]?.trim();
    if (placeName && placeName.length > 3 && placeName !== "Default apartment") {
        sentiment = await generateSentimentForPlace(placeName);
    }
    
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
    if(place["media"]?.["images"]?.[0]?.["source"] != null) {
        imageUrl = place["media"]["images"][0]["source"];
    } else if(place["media"]?.["mainPhoto"]?.["source"] != null) {
        imageUrl = place["media"]["mainPhoto"]["source"];
    } else {
        imageUrl = "static/placeholder.webp"
    }
    imageUrl = imageUrl.replace(/{options}/g, '117');

    const address = place["geography"]?.["streetAddress"] || "Address not available";
    const description = place["propertyType"] || "Property type not specified";
    const rentPrice = place["floorPlanSummary"]?.["price"]?.["formatted"] || "Price not available";

    const latitude = place["geography"]?.["latitude"];
    const longitude = place["geography"]?.["longitude"];
    const safety = (latitude && longitude) ? await safeScore(latitude, longitude) : 5; // Default safety score

    const [_, commuteTime] = address !== "Address not available" 
        ? await calculateCommute(address + " Blacksburg, Virginia")
        : [null, "Commute time not available"];

    const amenities = place["amenityGroups"]?.map(/** @param {any} entry */ (entry) => {
        // Handle items that might be objects or strings
        const items = entry["items"]?.map(/** @param {any} item */ (item) => {
            if (typeof item === 'string') {
                return item;
            } else if (typeof item === 'object' && item !== null) {
                // If item is an object, try to extract a meaningful string
                return item.name || item.title || item.description || item.text || JSON.stringify(item);
            }
            return String(item);
        }) || [];
        
        return {
            name: entry["categoryName"] || "Features", 
            items: items
        };
    }) || [];

    console.log("Amenities structure:", JSON.stringify(amenities, null, 2));

    const phone = place["leads"]?.["phone"]?.["formatted"] || "Phone not available";

    return { pros, cons, imageUrl, address, description, rentPrice, safety, commuteTime, amenities, phone };
}