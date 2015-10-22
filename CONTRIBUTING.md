# How to contribute

Before contributing, make sure to check out the `GUIDELINES.md`

## From beginning

  1. Fork the repo to your GitHub account
  2. Clone the forked repo to your local machine
  3. Assuming you already have the repo in your local pc:
  4. `git remote add upstream https://github.com/Reddit-Web-Dev/Reddit-Web-Dev.github.io.git`
  5. `git fetch upstream`
  6. `git checkout -b <New Feature branch with your changes>`
  7. Change files as you want
  8. `git add -A`
  9. `git commit -m "A nice message describing what you changed"`
  10. `git checkout <Branch you want to contribute>`
  12. `git pull upstream <Branch you want to contribute>`
  13. `git merge <New Feature branch with your changes>`
  14. `git push origin <Branch you want to contribute>`
  15. Go to your GitHub account, select the branch you changed, in this case,
  `<Branch you want to contribute>`, and click open a new PR button.

## Updating the whole fork

  1. `git pull upstream`

## Updating your fork for a specific branch

  1. `git pull upstream <Specific branch>`
  2. `git checkout <Specific branch>`
