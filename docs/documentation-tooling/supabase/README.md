# Documentation Tooling Project (Docusaurus Site)
This project involved auditing and restructuring documentation for a React project with Supabase using Docusaurus. The goal was to create a more accessible and hands-on guide for developers, particularly those new to Supabase.

## Live Site
[View Site](https://writetech-accelerator-portfolio-que.vercel.app/)

## What I Improved
- **A "Getting Started" Guide for Beginners**: I transformed the existing guide into a highly visual, step-by-step walkthrough. The new guide is tailored for beginners, breaking down core concepts and explaining the "why" behind certain actions. By adding screenshots and GIFs, I created a truly hands-on, follow-along experience that lets the reader visualize exactly what they're doing.

- **Detailed API Reference Documentation**: I created a clearer, more robust reference for the Supabase Management API for creating and deleting projects. I expanded on the existing, "skeleton-like" documentation by:
    - Explicitly stating and explaining each parameter.
    - Presenting the response schema in a clean, easy-to-read table format.
    - Including a list of possible error codes with their meanings and what to look out for.


## Challenges
- **Environment Variable Issues**: A key challenge I overcame was a local development error with environment variables.My environment variables repeatedly retuned *undefined* because I placed them in the wrong folder. I made sure to state a prevention to this issue in the docs, so that users would not run in to the same issue. 

- **Deployment Issues**: The deployed site's fonts and heading sizes looked different from the local version. This is a common issue and I'm currently working to resolve it, likely by investigating the deployment's handling of CSS and font files.

## What I Learnt
- Deep Docusaurus Expertise: This project provided me with hands-on experience in customizing and managing a Docusaurus site, including navigating the sidebar and leveraging Markdown.

- Front-End Integration: I learned how to integrate new React components and custom styles into the Docusaurus, allowing me to fully control the look and feel of the site.
