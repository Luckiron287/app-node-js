const myName = process.env.MY_NAME;
const myCity = process.env.MY_CITY;
const myLanguage = process.env.MY_LANGUAGE;

import "dotenv/config";
console.log(
	`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`,
);
