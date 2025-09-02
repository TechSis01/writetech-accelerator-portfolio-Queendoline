# Automation Project: Vale & Spectral Setup  

## Overview  
For this project, I set up automated checks for my sample article and openapi specification document using **Vale**, **Spectral**, and **Markdown Link Check**. I also used **Redocly** to generate API reference docs. Everything runs through **GitHub Actions**, so the process is automated, solidifying my knowledge on CI/CD workflows as a technical writer. 

My goal was to make sure that:  
- My writing was clean and consistent.  
- Openapi specs follow the right format and naming conventions.  
- Catch any broken links early.  
- Use Redocly to generate an API reference page automatically.  

---

## My Setup  

- **Vale** → I installed vale on my machine and I generated the configuration code which used used Google, Joblint, and Write Good style guides, plus a custom rule I created to flag any filler words (like *actually, really, very, simple*). I tested this on a sample markdown file, which was an article I wrote about **Sabre Management APIs**.  
- **Markdown Link Check** → I installed the markdown link checker to run through the sample documentation and flag any broken or dead links. 
- **Spectral** → Validated my OpenAPI specification to make sure the structure and format were correct.  
- **Redocly** → Generated a `reference.html` file for my API docs.  
- **GitHub Actions** → This was to ensure nothing was done manually, and with every push and pull request to the main branch, all jobs necessary to validate my docs and openapi spec ran automatically. 

---

## Rules & Standards I Enforced  
Apart from the default rules that came with Vale and the other styles guides, I came up with my own custom style guide as stated earlier to flag every filler word. 
---

---

## 🛠️ Challenges I Faced  
- The biggest issue I ran into was trying to publish just the `reference.html` page to GitHub Pages using Actions. The file was generating fine, but the Pages workflow kept breaking. That’s something I’m still trying to figure out.
- I noticed that even after I set my Vale checks to fail on error, they still passed once I pushed to my remote repository, I am still trying to troubleshoot this issue, to understand the root cause. 
  

---

## What I Learned  
- How to set up and connect different tools like Vale, Spectral, and Markdown Link Check in one pipeline.  
- Creating custom Vale rules to enforce specific style preferences.  
- Using Redocly to generate polished API reference docs.  
- Why automated link checking is a must-have for docs projects.  
- How tricky debugging GitHub Actions workflows can be.  

