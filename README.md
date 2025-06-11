This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project Takeaways

## NextJS hooks

useRouter() - "next/navigation", gives us an instance of the router.

## Other packages used

clsx - Can specify conditional styling for html elements easily
framer-motion - Can give divs motion prefixes and then easily animate between them
tailwind-merge - Override later class options in tailwind.
prisma - interact with SQLite. npm install prisma@5.6.0 --save-dev sqlite
--(only a dev dependency. specify DB type)
--npx prisma studio to view db.

## Getting page slugs on a server component

How can we get the slug of a page on a server component? usePathname() will turn our entire component into a client component, so we can't use that. Instead NextJS gives us the ability to grab them from the {params} parameter.

## Fetching data on server components

Before in base React when we wanted to get data we had to use the React hook useEffect(). Now that we are working with NextJS we can grab the data directly in a server component. We just have to make the server component async and then we can use fetch directly.

Benefits:
Server is close to the database, better performance.
Reduces client bundle. Less javascript shipped to the client.
We can have secret api keys in the server component.

## Images from other domains must be specified in next.config.js

Self explanatory, we need to allow images from other domains in the config file.

## Tailwind notes

Some general notes about tailwind:

### Tailwind is mobile first

When giving padding and spacing, the first argument without media width/height is designed for mobile. Then you can adjust for bigger screens with md:, sm:, etc.

## Prisma

Prisma is a tool used in this project to setup our database, define what data goes in the database, and also view the database.

1. Install prisma with npm install prisma
2. Define the model for our data in schema.prisma
3. Create a seed.ts file that will seed our data
4. Install ts-node to execute the file that will seed our data
5. Optionally add a package.json script that will execute tell ts-node to execute our seed.ts file
6. View data with npx prisma studio

## Grabbing data from Prisma

Prisma recommends instantiating the PrismaClient only once. In this project we've done that in lib/db.ts

Then we can import that client and call the table we want with prisma.{table}.findMany() or .findUnique(). Both require an object to be passed with where : {} which is basically like our query.
