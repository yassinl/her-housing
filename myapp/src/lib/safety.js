const radius = 0.5;

export async function safeScore(latitude, longitude) {
    const url = `https://vspsor.com/search/searchMap?lat=${latitude}&lng=${longitude}&r=${radius}`; // Replace with your actual API endpoint


    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_access_token_here'  // Include if your API requires authentication
    };

    const data = {
        "draw": 1,
        "columns": [
            {
                "data": "fullName",
                "name": "",
                "searchable": true,
                "orderable": false,
                "search": { "value": "", "regex": false }
            }
        ],
        "order": [],
        "start": 0,
        "length": 10,
        "search": { "value": "", "regex": false }
    };

    return await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log("Request successful!");
                return response.json();
            } else {
                throw new Error(`Request failed with status code ${response.status}`);
            }
        })
        .then(responseData => {
            const n = 10 - responseData.offenders.length;
            return n < 0 ? 0 : n;
        })
        .catch(error => {
            console.error(error.message);
        });
}