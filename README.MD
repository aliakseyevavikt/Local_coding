### **To run tests:**
* Clone repository
```
cd ProjectsQA
git clone https://github.com/rinsal/QA6_Local_Coding.git
```
* Run `npm install`
* Run `npm test`

### **To create Pull Request:**
* Make sure you are on master branch
* Check your local master branch is up to date
```
git pull
```
* Pick up/create a JIRA task
* Create the branch with the name = JIRA task id (for example, TLC-223)
```
git branch TLC-223
```
* Check out the branch
```
git checkout TLC-223
```
* Change/create files you were suppose to (according to your JIRA task)
* Add changes to git
```
git add .
```
* Commit your changes
```
git commit -m "TLC-223 changed these files"
```
* Push your changes to the remote branch with the same name
```
git push -u origin TLC-223
```
* Go to GitHub (you will have the link if you work from terminal)
* Create a Pull Request (from TLC-223 -> master)
* Assign reviewers