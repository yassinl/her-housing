import { calculateCommute } from "$lib/commute";
import { fetchHousingData } from "$lib/data";

export async function load() {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const cards = await Promise.all(data.map(async (entry, i) => {
        const [x, transit] = await calculateCommute(entry["geography"]["streetAddress"] + " Blacksburg, VA");
        const [distance, walking] = await calculateCommute(entry["geography"]["streetAddress"] + " Blacksburg, VA", 'walking');

        let image;
        if (entry["media"]["images"][0]["source"] != null) {
            image = entry["media"]["images"][0]["source"];
        } else if (entry["media"]["mainPhoto"]["source"] != null) {
            image = entry["media"]["mainPhoto"]["source"];
        } else {
            image = "static/placeholder.webp";
        }
        image = image.replace(/{options}/g, '117');

        return {
            title: entry["name"],
            imageUrl: image,
            description: entry["floorPlanSummary"]["price"]["formatted"],
            id: i,
            transit: transit,
            walking: walking,
            distance: distance
        };
    }));
    return { cards };
}