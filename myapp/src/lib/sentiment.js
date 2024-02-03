const { readFileSync } = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GOOGLE_API_KEY = "AIzaSyBpFYOFasfilu9aWo0v6lc-i0ANR7ZQT3g";

/**
 * @param {string} placeName
 */
async function getReviewsForPlace(placeName) {
    console.log(`Attemping to find place id for ${placeName}`);

    const placeId = await fetch("https://places.googleapis.com/v1/places:searchText", {
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_API_KEY,
            'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.priceLevel',
        },
        method: 'POST',
        body: JSON.stringify({
            'textQuery': `${placeName} in Blacksburg Virginia`,
            'languageCode': 'en'
        })
    }).then((response) => response.json()).then((data) => {
        if (data["places"] == null) {
            throw new Error(`No places found for ${placeName}`);
        }

        return data["places"][0]["id"];
    });

    console.log(`Found place id ${placeId} for ${placeName}`);

    const reviews = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}&reviews_sort=newest&fields=reviews`)
        .then((response) => response.json())
        .then((data) => data["result"]["reviews"]);

    return reviews;
}

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // use for text-only
const globalPrompt = readFileSync('prompt.txt').toString();

/**
 * @param {any[] | null} reviews
 */
async function generateSentiment(reviews) {
    if (reviews == null) {
        throw new Error("No reviews found in generateSentiment()");
    }

    const reviewString = reviews.map((review) => {
        return `${review["relative_time_description"]}:${review["text"]}`;
    }).join('|');

    const prompt = globalPrompt + reviewString;

    const result = await model.generateContent(prompt)
    const response = await result.response;
    const text = response.text();
    return text;
}

/**
 * @param {string} placeName 
 * @returns 
 */
export async function generateSentimentForPlace(placeName) {
    return await getReviewsForPlace(placeName)
            .then((reviews) => generateSentiment(reviews))
            .catch((err) => console.error(err));
}

// async function main() {
//     const places = openPageFile(1)["data"];
//     let idx = 0;
//     while (places[idx] != null) {
//         const place = places[idx]["seoName"];    
//             await getReviewsForPlace(placeName)
//             .then((reviews) => generateSentiment(reviews))
//             .then((list) => console.log(list))
//             .catch((err) => console.error(err));
//         idx++;
//     }
// }
