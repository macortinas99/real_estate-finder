This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Start with cloning the repository and then cd into the root folder.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
Once you run the development server you should see this home page.
## Home Page
![image](https://user-images.githubusercontent.com/58274004/172679324-2b943406-8fcb-4692-ad88-9c3e4691782a.png)

The reason behind prices being shown in AED and not USD is due to the API that was used to web-scrape all of this data. Here is the website where the API documents can be found.
https://rapidapi.com/apidojo/api/bayut

## Features included in this project
Menu dropdown includes Home, Search, Buy and Rent properties. Clicking on any of these links will send you to the corresponding page.
There is also a filter feature added. You can select the dropdown filter when on the search page, and filter things such as # of rooms, beds, baths, price, etc. 
![image](https://user-images.githubusercontent.com/58274004/172680224-00e46ca9-5807-482d-ba3e-198ef4e6292d.png)

## Details page
Once you have selected a property you are interested in, you can simply click on the image and it will pull up all details about the property.
![image](https://user-images.githubusercontent.com/58274004/172680449-62f2cfdc-864b-4205-bbb5-d45429787a55.png)

If there are any amenities included with the property it will show what is included, if there is not any amenities then the Facilities section will not be shown.
![image](https://user-images.githubusercontent.com/58274004/172680698-ba0f0401-d10b-428a-aa0e-d6af7e7b722d.png)


#

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

 
