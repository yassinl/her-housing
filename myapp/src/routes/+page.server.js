import { calculateCommute } from "$lib/commute";
import { fetchHousingData } from "$lib/data";

export async function load() {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    const cards = await Promise.all(data.map(async (entry, i) => {
        const transit = await calculateCommute(entry["geography"]["streetAddress"] + " Blacksburg, VA");
        const walking = await calculateCommute(entry["geography"]["streetAddress"] + " Blacksburg, VA", 'walking');

        return {
            title: entry["name"],
            imageUrl: entry["media"]["images"][0]["source"],
            description: entry["floorPlanSummary"]["price"]["formatted"],
            id: i,
            transit: transit,
            walking: walking
        };
    }));
    return {cards};
}