# How to contribute

## From beginning

  1. Fork the repo to your GitHub account
  2. Clone the repo to your local machine
  3. Assuming you already have the repo in your local pc:
  3.1. `git remote add upstream https://github.com/Reddit-Web-Dev/Reddit-Web-Dev.github.io.git`
  3.2. `git fetch upstream`
  3.3. `git checkout -b <New Feature branch with your changes>`
  3.4. Change files as you want
  3.5. `git add -A`
  3.6. `git commit -m "A nice message describing what you changed"`
  3.7. `git checkout <Branch you want to contribute>`
  3.8. `git fetch upstream <Branch you want to contribute>`
  3.9. `git pull upstream <Branch you want to contribute>`
  3.9. `git merge <New Feature branch with your changes>`
  3.10. `git push origin <Branch you want to contribute>`
  4. Go to your GitHub account, select the branch you changed, in this case,
  <Branch you want to contribute>, and click open a new PR button.

## Updating your fork

  1. `git fetch upstream branch`
  2. `git checkout branch`
  3. `git pull upstream branch`