// const puppeteer = require('puppeteer');

const { writeFileSync } = require("fs");

async function main(page) {
    return await fetch(`https://offcampus.vt.edu/bff/listing/search/list?url=%2Fhousing%2Fpage-${page}&seed=6794&locale=en`, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Microsoft Edge\";v=\"121\", \"Chromium\";v=\"121\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },
        "referrer": "https://offcampus.vt.edu/housing",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        writeFileSync(`data/page-${page}.json`, JSON.stringify(data));
      });
}

main(4);