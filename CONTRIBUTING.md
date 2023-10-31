<h1 align=center> For the contributors 🫂 </h1>




### Haven't made your first-contribution yet? 😢
Do check our [First Contribution](https://github.com/Clueless-Community/first-contribution) repository, where we have provided the guidelines to set up Git and how to make a pull request !

---
## Table of Content
> [How to contribute?](https://github.com/Clueless-Community/seamless-ui/edit/main/CONTRIBUTING.md#how-to-contribute--you-must-use-tailwind-css-)

> [Raise an issue and build a component you want to build.](https://github.com/Clueless-Community/seamless-ui/edit/main/CONTRIBUTING.md#raise-an-issue-and-build-a-component-you-want-to-build)

> [FAQ](https://github.com/Clueless-Community/seamless-ui/edit/main/CONTRIBUTING.md#faq)

> [Project setup in local](https://github.com/Clueless-Community/seamless-ui/edit/main/CONTRIBUTING.md#project-setup-in-local-1)

> [Project setup for `website-dev` branch](https://github.com/Clueless-Community/seamless-ui/edit/main/CONTRIBUTING.md#project-setup-for-website-dev-branch-1)


# How to contribute? ( You must use tailwind CSS )
## Using Tailwind playground.

One can easily make a contribution to this repository without setting this up locally. If you are building a new UI component then follow the steps written below.

### Step 1:

&nbsp; Go to [Tailwind Playground](https://play.tailwindcss.com/).

### Step 2:

&nbsp; Build the UI component using `HTML` and `Tailwind CSS`.

### Setup 3:

&nbsp; Add your code to the mentioned path and make a new PR.

### PR guide:

&nbsp; You need to make a PR with the template mentioned below.

```
Here is the component I have built. 

Here is a screenshot of that.

### Add a screenshot here
```

If you are solving any other issue, make your own PR. don't need to follow this template.

--- 

# Raise an issue and build a component you want to build.

- Navigate to the SeamLess UI repository on GitHub.
- Click on the "Issues" tab.
- Click on the "New issue" button. ![New Issue Badge](https://img.shields.io/badge/-New%20Issue-brightgreen)
- Then create an issue using the `New Component` issue template.
- Provide a descriptive title for the issue.
- Take a screenshot of the component you want to build from the [figma file](https://www.figma.com/file/qzwugAfEB1GL4FgWXw9R3Z/SeamLess-UI-Dev?node-id=0%3A1&t=qRahoepdI3B98cVA-1) and paste it in the issue description. Make sure the component is not already built.
-  Get assigned and build it.

This is super easy. 👍 
---
# FAQ

| Question | Answer |
| :--- | :--- |
| 1. What to do for local images? | You can upload the image online like [this](https://imgbb.com/) and use the image link. |
| 2. Does tailwind playground is enough to build any component ? | Yes, absolutely. |
| 3. How to test responsiveness in tailwind playground? | Tailwind play ground have a responsive mode where you can test it. You can find that option on the top right corner |
| 4. What are the pre-requisite to contribute? | Basic HTML and Tailwind CSS knowledge will be enough for contribution and making the components. |
---

# Project setup in local
## Fork and clone the repository
```bash
git clone https://github.com/Clueless-Community/seamless-ui.git
```

## Change the directory
```bash
cd seamless-ui

```

Once you are done with the changes, follow the steps to make the pull request.
## Create and checkout to the new branch.
```powershell
git checkout -b <branch_name>
```
## Add the changes
```
git add .
```

## Commit your change with a proper messagge
```
git commit -m "Enter your message here"
```

## Make the Pull Request
```
git push origin <branch_name>
```

---

# Project setup for `website-dev` branch

> To make any changes in the website, you have to push your code to `website-dev` branch only.

### After Forking > Cloning > Change branch to `website-dev`
```
git checkout website-dev
```

### To install all the dependencies
```
pnpm i
```

### To start the dev server
```
pnpm run dev
```
