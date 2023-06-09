---
layout: project
title: User Interviews + Static Site Generation
emoji: 📞
metaDescription: Interviews to gain customer insights
date: 2022-03-15T00:00:00.000Z
summary: UX research for Murphy's Magic Supplies, with interview notes recorded and organized using a mocked up website.
tags:
  - User Research
  - Front End Dev
  - React.js
  - Netlify
---

![Screenshot of Interview Notes](/static/img/ssg-screenshot.jpg)

[See the site in action, deployed via Netlify!](https://dancing-cocada-40c50f.netlify.app/)

### Skills Used
- User Research
- User Interviews
- Front-End Development
- Javascript/HTML/CSS
- Markdown
- Netlify

### Overview

A collection of user interviews to uncover wholesale customer behavior, and how that could influence the final website redesign for Murphy's Magic Supplies. Notes taken via Next.JS and deployed with Netlify.

### What I learned

- Survey generation for user interviews
- How to coordinate user interviews across different time zones
- How to adapt to between interviews and interview strategies
- Deployment of Static Site Generation via Next.js/React Javascript

### In Depth

A recurring challenge at Murphy's Magic Supplies was the lack of data on our wholesale customers. We had 1600 retailers that we worked for, but the overwhelming majority of revenue came from the global top 120. Our proprietary CRM was outdated and only gave us basic sales and purchasing data, making insights into our customers a challenge. We tried simple surveying methods in the past, we wanted deeper insights into the user experience of our website, and so I took the lead on interviewing and finding willing clients to interview. 

**Our goal with the interview was to determine how the dealers interacted with our site and how to address or eliminate any pain points they had in our website redesign.**

As an additional challenge, I given feedback that my note-taking during meetings made me appear as if I were asleep, so I determined that I should type all of my notes out on a note-taking format instead of my preferred "pad and paper" methods. In lieu of asking IT for permission to download a tool like Notion or Obsidian, I decided to use a Static Site Generator in the form of Next.JS to practice web development. It worked like a charm and helped make note-taking look seamless to my interview subjects!

#### Interview Preparation

The gathering of interview subjects was a rather difficult challenge. With a range of active dealers from around the world, coordinating between time zones was quite the challenge. But to ensure that our changes would positively affect our retailers, I managed to set up meetings as early as 7AM, requiring me to come into the office early on many occasions to reach dealers as far away as Japan or South Africa. We managed to complete 16 interviews in 2 months, with 13 of them being retailers, and 3 more being solutions engineers or web developers. With that, we were able to get a wide range of understanding of how Murphy's Magic Customers interacted with the site as well as our performance relative to competitors.

*The interview questions were as follows:*

**1. Tell me about [insert magic company here], and what your interactions with the Murphy's Magic Site?**

**2. When looking for new products to promote, what is your strategy for finding new products to promote and sell?**

**3. How proficient with technology are you?**

**4. How often do you use other shopping websites and how do they compare with Murphy's Magic? What functions on those websites do you find to be the most useful?**

**5. On a scale from 1-10 (with 10 as a perfect score), how would you rate the experience of using the Murphy's Magic website and why?**

**6. What features are you using on the website that don't involve directly purchasing goods?**

**7. What are your first thoughts when you look at the home page?**

**8. What are your first thoughts when you look at the accounts page?**

**9. What features or improvements would you like to see in the next version of this website?**


#### Basic Interview Conclusions
One of the more surprising aspects of the Murphy's Magic customer base was their general approval of the site experience, even though it was mostly unchanged for the last 6 years. This was a result of our proprietary site API doing most, if not all of the heavy lifting for retail customers. However, the developer experience and implementation of the API is so difficult and outdated that it was not feasible even for new dealers that hired developers to set up their store.

The API also desperately needed an update, and would leave dealer customers unaware of critical changes to product availability, pricing, and more critical data. One impressive dealer was also a talented programmer who made their own version of the API with python to get better site performance.

For more interview insights, [follow the detailed conclusions page for more:](https://dancing-cocada-40c50f.netlify.app/posts/Interview%20Conclusions)

#### Developer Notes

Having been interested in the deployment of websites for front-end development, I was super interested in seeing its uses within Murphy's. Having a really clean and seamless way to take and organize notes for interviews seemed like a fun challenge that would be beneficial for my own sake, and for the sake of eventually presenting for stakeholders. I found the idea of having separate Markdown files convert into new web pages every time that I added one in to be fascinating (known as Static Site Generation or SSG).

For the sake of simplicity, I made sure not to overly stylize the page and focus on the contents as well as file visibility, and devised a method for Static Site Generation via NextJS, a React Javascript framework. [For more information on this subject, follow the documentation from Vercel.](https://nextjs.org/docs/basic-features/pages)
