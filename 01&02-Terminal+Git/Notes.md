# Notes-Becode

## 1. - Terminal

### 1.1. - Navigation

* print your location on the screen - 

```shell
pwd
```

Pour Print Working Directory

* print the content of your current directory -

```shell
ls
```

  move to the folder `/bin` - 

```shell
cd /bin
```

- print your new location - 

```bash
pwd
```

- go back to your home folder - 

```shell
cd /home/
```

- move to any location on your file system for a quick job

- pop back to your previous location to get back to work

  Eg. In /home/Becode

```shell
pushd /
```

  Move to an other location

```shell
cd /home/user/Documents
```

   Pop back
```shell
popd
```

### 1.2. - File Operation

* create a file named `one.txt`

```shell
touch one.txt
```

* type `echo "Hello World" > one.txt`

```shell
echo "Hello World" > one.txt
```

* print the content of that file on the screen

```shell
cat one.txt
```

* create a folder named `story`

```shell
mdir story
```

* move `one.txt` into that folder

```shell
mv one.txt ./story
```

* copy `one.txt` inside the folder `story` as `two.txt`

```shell
cd ./story
cp one.txt two.txt    
```

* print the content of both files

```shell
cat one.txt two.txt
```

* rename `one.txt` to `part_one.txt` and `two.txt` to `part_two.txt`

```shell
mv one.txt part_one.txt
mv two.txt part_two.txt
```

* type `echo "I am a junior at BeCode." > story/part_two.txt`

```shell
echo "I am a junior at BeCode." > story/part_two.txt
```

* print the content of both files simultaneously

```shell
cat part_one.txt part.two.txt
```

* remove the folder `story` and all its content

```shell
cd ../
rm -r ./story
```

There is two way to remove a folder, try to find both.

```shell
sudo rm -i ./story/* - ???
```

### 1.3 - Permissions

- create a file
```shell
touch file.txt	
```
- check the owner and group of the file (use `ls`)
```shell
ls -l file.txt
```
- change its owner to **root**
```shell
sudo chown root file.txt
```
- change its group to **root**
```shell
sudo chgrp root file.txt
```
- check that file’s permission (use `ls`)
```shell
ls -l file.txt
```
- give all rights to owner and group, but none to others
```shell
sudo chmod u=rwx,g=rwx,o=r file.txt
```
- try to print the file on screen
```shell
cat file.txt
```
- print the file with root privileges
```shell
sudo cat file.txt
```

### 1.4. - Text Editor

#### Requirements

- `nano` is installed on your machine
```shell
sudo apt-get install nano
```
- `vim` is installed on your machine
```shell
sudo apt-get install vim
```

- create the file *text.txt* with `nano`
```shell
nano file.txt
```
- remove *text.txt*
```shell
rm file.txt
```
- type `vimtutor` and read through the tutorial
```shell
vimtutor
```
- create the file *text.txt* with `vim`
```shell
vim text.txt
```

### 1.5. - Package manager

- update all the packages on you system
```shell
sudo apt-get update
```
- search if your distribution has *chromium*
```shell
sudo apt-cache search chromium
```
- install *chromium*
```shell
sudo add-apt-repository ppa:xalt7x/chromium-deb-vaapi
sudo apt-get install chromium-browser
```
- launch *chromium*
```shell
chromium-browser
```
- remove *chromium*
```shell
sudo apt-get --purge remove chromium-browser
```

## 2. - Git

### 2.1. - Training

- clone a repository

  Create a new repository on github.com

  Click on code and copy the HTTPS url

```shell
cd "The location in which you want to clone the repository"
git clone https://github.com/"Username/Repository.git"
```

- add/commit with `git`
```shell
touch file.txt
git add file.txt
git commit -m "Commit Message"
```
- push with `git`
```shell
git push origin master
```

### 2.2. - Branching

* Introduction to Git Commits

```shell
git commit 
git commit 
```

* Branching in Git

```shell
git branch bugFix 
git checkout bugFix 
```

* Merging in Git

```shell
git checkout -b bugFix 
git commit 
git checkout master 
git commit 
git merge bugFix 
```

* Rebase Introduction

```shell
git checkout -b bugFix 
git commit 
git checkout master 
git commit 
git checkout bugFix 
git rebase master 
```

* Detach yo’ HEAD

```shell
git checkout C4 
```

* Relative refs (^)

```shell
git checkout C4^ 
```

* Relative refs #2

```shell
git branch -f master C6 
git branch -f bugFix C0 
git checkout C1 
```

* Reversing Changes in Git

```shell
git reset local~1 
git checkout pushed 
git revert pushed 
```

* Cherry-pick Intro

```shell
git cherry-pick C3 C4 C7 
```

* Interactive Rebase Intro

```shell
git rebase -i master~4 --aboveAll 
```


* Grabbing Just 1 Commit

```shell
git checkout master 
git cherry-pick C4 
```

* Juggling Commits

```shell
git rebase -i caption~2 --aboveAll 
git commit --amend 
git rebase -i caption~2 --aboveAll 
git branch -f master caption 
```

* Juggling Commits #2

```shell
git checkout master 
git cherry-pick C2 
git commit --amend 
git cherry-pick C3 
```

* Git Tags

```shell
git tag v0 C1 
git tag v1 C2 
git checkout C2 
```

* Git Describe

```shell
git commit 
```

* Rebasing over 9000 times

```shell
git rebase master bugFix 
git rebase bugFix side 
git rebase side another 
git rebase another master 
```

* Multiple parents

```shell
git branch bugWork master~^2~ 
```

* Branch Spaghetti

```shell
git checkout one 
git cherry-pick C4 C3 C2 
git checkout two 
git cherry-pick C5 C4 C3 C2 
git branch -f three C2 
```

  #### Remote

* Clone Intro

```shell
git clone 
```

* Remote Branches

```shell
git commit 
git checkout o/master 
git commit 
```

* Git Fetchin’

```shell
git fetch 
```

* Git Pullin’

```shell
git pull 
```

* Fakeing Teamwork

```shell
git clone 
git fakeTeamwork master 2 
git commit 
git pull 
```

* Git Pushin’

```shell
git clone 
git commit 
git commit 
git push 
```

* Diverged History

```shell
git clone 
git fakeTeamwork 
git commit 
git pull --rebase 
git push 
```

* Push Master!

```shell
git fetch 
git rebase o/master side1 
git rebase side1 side2 
git rebase side2 side3 
git rebase side3 master 
git push 
```

* Merging with remotes

```shell
git checkout master 
git pull 
git merge side1 
git merge side2 
git merge side3 
git push 
```

* Remoting Tracking

```shell
git checkout -b side o/master 
git commit 
git pull --rebase 
git push 
```

* Git push arguments

```shell
git push origin master 
git push origin foo 
```

* Git push arguments — Expanded!

```shell
git push origin master~1:foo 
git push origin foo:master 
```

* Fetch arguments

```shell
git fetch origin master~1:foo 
git fetch origin foo:master 
git checkout foo 
git merge master 
```

* Source of nothing

```shell
git push origin :foo 
git fetch origin :bar 
```

* Pull arguments

```shell
git pull origin bar:foo 
git pull origin master:side 
```