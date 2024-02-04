import { fetchHousingData } from "$lib/data";

export async function load() {
    let dataRaw = await fetchHousingData(1);
    let data = dataRaw["data"];

    data.length = data.length >= 16 ? 16 : data.length;
    const cards = data.map((entry, i) => {
        return {
            title: entry["name"],
            imageUrl: entry["media"]["images"][0]["source"],
            description: entry["floorPlanSummary"]["price"]["formatted"],
            id: i
        };
    });
    return {cards};
}