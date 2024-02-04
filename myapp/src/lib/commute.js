const apiKey = 'AIzaSyAOL_5QvkK61mcwYez5Sl3RHdmV-n5LF-0';
const originAddress = 'Squires Student center';

async function getBusCommuteTime(apiKey, origin, destination, mode = 'transit') {
    const baseUrl = "https://maps.googleapis.com/maps/api/directions/json";

    const params = new URLSearchParams({
        'key': apiKey,
        'origin': origin,
        'destination': destination,
        'mode': mode
    });

    const url = `${baseUrl}?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
        const route = data.routes[0];
        const legs = route.legs[0];
        const durationText = legs.duration.text;
        const distance = legs.distance.text;
        return [distance, durationText];
    } else {
        return "Error: Unable to retrieve commute time.";
    }
}

export async function calculateCommute(destinationAddress, mode = 'transit') {
    // console.log(`${mode} commute time from ${originAddress} to ${destinationAddress}: ${commuteTime}`);
    return await getBusCommuteTime(apiKey, originAddress, destinationAddress, mode);
}
