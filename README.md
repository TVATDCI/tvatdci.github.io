# tvatdci.github.io

# Deployment practice

This exercise is about practicing how to deploy React applications.

## What you will be doing

GitHub provides hosting with GitHub pages. If you have a repo like `<user>.github.io`, for example https://github.com/Req/req.github.io it will automatically be published at the same URL as the repo name, for example https://req.github.io

If you don't have a repo like that, create one. We will practice _one method_ of using GH pages for publishing a Vite React project.

## Tasks

- Clone the `<user>.github.io` repo and view it in terminal
    - `cd <user>.github.io`

- Create a simple vite project inside it
    - `npm create vite@latest my-project`
    - Note: we are making a vite project as a subfolder

- Check that the project works, build the project, return to main folder
    - `cd my-project`
    - `npm i`
    - `npm run dev`
    - `npm run build`
    - `cd ..`

- Now you should have a "dist" folder in "my-project", move its contents to the main folder
    - `mv my-project/dist/* .`
    - The main folder should have `index.html` and `assets` folder
    - Add, commit and push your work

- Open the repository in GitHub
    - Monitor the "Deployments" section on the right
    - You might have to refresh the page multiple times
    - When the deployment shows a green check, your project is deployed
    - Visit `https://<user>.github.io` and you should see your Vite app

- There are many ways of deploying
    - This was just one method
    - Spend 15 minutes researching;
        - See the GH pages documentation
        - The Vite documentation defines multiple was as well
        - https://vitejs.dev/guide/static-deploy.html#github-pages

## Optional extras

**Question**: This _only_ works with the `<user>.github.io` repo (unless you do extra work). Try it with another repository and figure out why.

Even fairly new tutorials can have outdated instructions. Be patient, think of the concepts and try different methods - experimenting can benefit your greatly!
