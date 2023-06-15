---
layout: project
title: Portfolio Site Overhaul
date: 2023-01-28
confidential: false
metaDescription: Redesigning portfolio website to demonstrate learned skills
summary: Overhaul current portfolio to a more inviting aesthetic using skills learned from previous jobs. Dev implementation was handled by myself to learn the handoff process.

# Will be used on the thumbnail and main image.
thumbnail-img: "../images/portfolio/desktop-screen.png"
thumbnail-alt: "Desktop screen layout for new portfolio site"

# What skills did you use in this project?
tags:
  - Figma
  - HTML/CSS
  - Jekyll
  - Dev-Designer interaction
  - UI Design

# What did you learn in the process of completing this project?
learned:
- The direct link between design work in Figma and web dev
- How to translate columns on wireframes to bootstrap columns
- What Sass does to augment CSS, and how to scope for styles within Sass files
- How to deploy a site and use markdown to generate new articles
- How to evaluate a site and overhaul its visuals + user experience
---

#### Project Links
- [Current Netlify Site link](https://chipper-cranachan-7c0631.netlify.app/)
- [GitHub Repo for Portfolio](https://github.com/Hakata-jpn/portfolio)

### In Depth

Since 2021 I've been using the Fernfolio web template as my portfolio site, and it's served me really well in that timeframe. It helped me learn Markdown, version control with Git, and practice CSS while having a mobile-friendly site. It fit the bill between flexibility of design options while being accessible enough from a designer standpoint to define my personal brand and not be gridlocked by the site structure.

While it allowed me to focus more on the portfolio content itself, over the years I began to feel like I was outgrowing the template as my skills improved and the site did not. Some aspects of the page were thoughtfully designed but not necessarily built from the ground up to facilitate the showcasing of my previous works. Rating the site layout, here are my thoughts: 

![Previous site design, a desktop size screenshot of the homepage](../images/portfolio/desktop-screen-old.png)

#### What I liked:
1. Easy access to projects from the home page
2. Portfolio projects are easily labeled depending on desired reading depth
3. Markdown for quick site edits

#### What I didn't like:
1. The colors of the site were dark and not approachable
2. Site does not give visual examples of my best works
3. Reliance on site template whose technologies I did not understand (Nunjucks)

#### Design
With all of these factors in consideration, a new design was in order with the goal of a friendlier and more visually expressive UI to highlight my recent experiences. Emphasis was placed on the use of Figma's Auto Layout and Component tools as those were ones I'd recently learned, and using those to create an aesthetic layout that used visual elements that stood out more. Of note, the color scheme was a point of emphasis due to my previous use of "comfort colors" and a desire to break out a little more from what I would most frequently consider. The general structure was updated, and the article structure is the key feature being migrated from the previous iteration of the site.

#### Development

Currently, this site is being developed in Jekyll. The site's homepage is 90% complete, project pages are 50% complete, and the project catalog page is 40% complete. More updates will come as the site nears completion, but progress can be directly followed via the Netlify link: