# Event Horizon
Developer: Stuart Wall

![Mockup image]()

[View live website]()


## Table of Contents
  1. [About](#about)
  2. [Project Goals](#project-goals)
  3. [User Experience](#user-experience)
      1. [Target Audience](#target-audience)
      2. [User Requirements and Expectations](#user-requirements-and-expectations)
      3. [User Stories](#user-stories)
      4. [Site Owner Stories](#site-owner-stories)
  4. [Technical Design](#technical-design)
      1. [Agile Design](#agile-design)
      2. [CRUD Functionality](#crud-functionality)
      3. [Colours](#colours)
      4. [Fonts](#fonts)
      5. [Wireframes](#wireframes)
  5. [Technologies Used](#technologies-used)
      1. [Coding Languages](#coding-languages)
      2. [Frameworks and Tools](#frameworks-and-tools)
      3. [Libraries](#libraries)
  6. [Front-End](#front-end)
      1. [React](#react)
  7. [Back-End API](#back-end-api)
      1. [Django REST Framework](#django-rest-framework)
  8. [Features](#features)
  9. [Future features / improvements](#future-features--improvements)
  10. [Validation](#validation)
      1. [HTML](#html-validation)
      2. [CSS](#css-validation)
      3. [ESLint JavaScript JSX Validation](#eslint-javascript-jsx-validation)
      4. [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
      5. [WAVE Validation](#wave-validation)
  11. [Testing](#testing)
      1. [Device Testing](#device-testing)
      2. [Browser Compatibility](#browser-compatibility)
      3. [Manual Testing](#manual-testing)
  12. [Bugs](#bugs)
  13. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  14. [Credits](#credits)
      1. [Tutorial](#tutorials)
      2. [Code](#code)
      3. [Literature](#literature)
      4. [Misc](#misc)
  15. [Acknowledgements](#acknowledgements)


## About

Event Horizon is an event hosting website. The overall concept is that users can sign up to Event Horizon and create and post events that other users can read about and attend. 


## Project Goals

The overarching project goals are to create a social media website. Users will be allowed to sign up and then log in. Once logged in, the users can edit their profile and change their username, password, profile picture and personal information. Users can also create events for other users to comment on, like or show their attendence. All posted content will have full CRUD functionality.



## User Experience

### Target Audience

The target users for Event Horizon are:
- users promoting businesses/organisations that are hosting events.
- users who wish to expand their social network and host social events in the local area.
- users who may wish to organise a specific group activity.
- users who wish to meet up with like-minded individuals.
- users who are new to an area and are looking to join local groups.


### User Requirements and Expectations

The User Requirements and Expectations of the webssite are:
- it is simple to use and intuitive to navigate.
- it is responsive across a range of devices.
- it has user authentication.
- it allows users to have their own profile page.
- it has search and filter functionality.
- it allows users to create content.
- it allows users to interact with posted content in a variety of ways.
- it has full CRUD functionality.



### User Stories


1. As a user I can view a navbar from every page so that I can navigate easily between pages.
2. As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh.
3. As a user I can create a new account so that I can access all the features for signed up users.
4. As a user I can sign in to the app so that I can access functionality for logged in users.
5. As a user I can tell if I am logged in or not so that I can log in if I need to.
6. As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
7. As a logged out user I can see sign in and sign up options so that I can sign in/sign up.
8. As a user I can view user's avatars so that I can easily identify users of the application.


9. As a logged in user I can create events so that I can share expand my social network.
10. As a user I can view the details of an event so that I can learn more about it.
11. As a logged in user I can like an event so that I can show my support for the creators that interest me.
12. As a logged in user I can show that I am attending and event so that I can show my support and the event host can make appropriate preparations.


13. As a user I can view all the most recent events, ordered by most recently created first so that I am up to date with the newest content.
14. As a user, I can search for events with keywords, so that I can find the events and user profiles I am most interested in.
15. As a logged in user I can view the events I liked so that I can find the events I enjoy the most.
16. As a logged in user I can view the events I am attending (or have attended) to see if there are any updates.
17. As a logged in user I can view content filtered by users I follow so that I can keep up to date with new events.
18. As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to navigate excessively throughout the site.


19. As a user I can view the event page so that I can read the comments about the event.
20. As an event creator I can edit my event details so that I can make corrections or updates to my event after it was created.
21. As a logged in user I can add comments to a event so that I can share my thoughts.
22. As a user I can see how long ago a comment was made so that I know how old a comment is.
23. As a user I can read comments on events so that I can read what other users think and see any updates.
24. As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.
25. As an owner of a comment I can edit my comment so that I can fix or update my existing comment.


26. As a user I can view other users profiles so that I can see their content and learn more about them.
27. As a user I can see a list of the most followed profiles so that I can see which creators are popular.
28. As a user I can view statistics about a specific user: bio, number of events, number of events attended, followers and users followed so that I can learn more about them.
29. As a logged in user I can follow and unfollow other users so that I can see and remove events by specific users in my feed.
30. As a user I can view all the content by a specific user so that I can catch up on their latest events, or decide I want to follow them.
31. As a logged in user I can edit my profile so that I can change my profile picture and bio.
32. As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.

### Site Owner Stories

 


##### Back to [top]()


## Technical Design

### Agile Design

An Agile approach to creating this app has been applied. GitHub's projects was used to track user stories and implement ideas based on their level of importance for allowing use of the app with no loss of functionality or user experience. Three categories were created indicating their level of importance, those were:
- MUST HAVE
- SHOULD HAVE
- COULD HAVE

By using AGILE methodology in this project I was able to deliver a site which had all required functionality and some more. Due to the time limit on this project I was not able to incorporate all initial listed features, but this is where an AGILE approach is great for app design. The project displays this by having User stories in the Done section and the ones which were decided to be left for future, put in the future implementations section of the readme.

The GitHub project can be found [here]()

### CRUD Functionality

Event Horizon handles data with full CRUD Functionality:
<br>
- Create -  Users can create, an account, profile, tasks, comments, packs, contact messages and watch objects.
- Read - Users can view the tasks, comments, packs of other users and also the profiles of these users.
- Update - Users can update their profile, password, posted tasks, packs and watch status of tasks via the interactive forms and buttons on the site.
- Delete - Users can delete tasks, comments, packs and watch objects via the interactive buttons on the site.

### Colours

The colour scheme for this application was kept minimal with a monochromatic theme kept in mind. 

<details>
<summary>Colours</summary>
<img src="">
</details>


### Fonts

Google Fonts were implemented on the website. 'Space Mono' with a back up of sans-serif was decided as the ideal font for the site.

### Wireframes

Balsamiq was used to create wireframes of the sites pages

<details>
<summary>Wireframes</summary>
<img src="">


</details>

##### Back to [top](#tick-it)


## Technologies Used

### Coding Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Frameworks and Tools

- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - Library to decode JSON Web token. Justification: I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered with.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces. Justification: To be able to showcase my newly learnt skills and for building interactive user interfaces quickly.
- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - CSS framework. Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Justification: I used this component to load content (tasks/comments/users) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Javascript framework for routing. Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser. 

- [Am I Responsive](http://ami.responsivedesign.is/) - Website responsive test site. Justification: I used this to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) - Mock up software. Justification: I used this to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - Developer tool. Justification: I used this for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) - File storage. Justification: I used this to store static files
- [Font Awesome](https://fontawesome.com/) - Icon library. Justification: I used this to style the site with icons.
- [Google Fonts](https://fonts.google.com/) - Font library. Justification: I used this to import fonts
- [Git](https://git-scm.com/) - Version control system. Justification: I used this for version control and to push the code to GitHub
- [GitHub](https://github.com/) - Cloud based hosting service. Justification: I used this as a remote repository to store project code
- [Gitpod](https://gitpod.io) - Cloud development environment. Justification: I used this to host a virtual workspace
- [Microsoft Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H) - Graphics editor. Justification: I used this to edit the images for testing user stories.
- Validation:
  - [WC3 Validator](https://validator.w3.org/) - HTML Validator. Justification: I used this to validate the applications HTML code
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - CSS Validator. Justification: I used this to validate the applications CSS code
  - [ESLint](https://eslint.org/) - JavaScript Validator. Justification: I used this to validate applications JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Site auditing tool. Justification: I used this to validate performance, accessibility, best practice and SEO of the application
  - [Wave](https://wave.webaim.org/) - Site accesibility auditor. Justification: I used this to evaluate the applications accessibility

### Libraries

#### Installed Libraries

| Package       | Version        |
| ------------- | ------------- |
| axios |1.3.4 |
| bootstrap | 4.6.0 |
| jwt-decode | 3.1.2 |
| react-bootstrap | 1.6.3 |
| react-chartjs-2 | 3.0.4 |
| react-dom | 17.0.2 |
| react-infinite-scroll-component |6.1.0 |
| react-multi-select-component | 4.3.4|
| react-router-dom | 5.3.0 |
| react-scripts | 5.0.1 |
| react-scroll | 1.8.9|


##### Back to [top]()


## Front-End

### React

The React.js framework is an open-source JavaScript framework and library developed by Jordan Walke, a software engineer at Meta. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript  

I used React for this application for several reasons:

 - Flexibility – Due to having a modular structure React code is easier to maintain compared to other front-end frameworks.

 - Speed – Creating sites/apps with React significantly increases the page loading speed as the entire page does not require to refresh and reload all components. Components are updated dynamically thus reducing the wait and load times, which affects user experience.

 - React Bootstrap - When used for styling and responsiveness React Bootstrap is a great choice as it comes with ready-to-use React built components thus taking away alot of need to create commonly used code from scratch.

- It is the most widely used library for developing social networking and media content applications - Sites such as Meta (formerly Facebook), Instagram, Netflix, Airbnb are all made with React.

- Reusability of components – Components can be created and re used throughout the app with no need to re write code for the same features.

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items due to being passed props. Those include a loading gif, image with source and alt attribute or a message consisting of a paragraph.


## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/Clinelly/ci_pp5_drf_api_events).

##### Back to [top](#)


## Features

In its entirety the website consists of a variety of features across the many site pages as listed below.

### Authentication

Authentication is a feature of the Tick It site, users will have to be authenticated whilst attempting to log in or else they will not be able to use any functionality of the site or view any information that users have posted.

<details>
<summary>Authentication image</summary>
<img src="">
</details>




## Future features / improvements

Although alot of effort was put into this project, due to time constraints there is still room for finer refactoring of code and additional functionality / features to implement to the site. 



##### Back to [top]()


## Validation 

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. No errors were identified. 

<details><summary>Main page (not logged in)</summary> 
<img src=""> 
</details>




### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors.

<details><summary>App.module.css</summary> 
<img src=""> 
</details> 




### ESLint JavaScript JSX Validation 

All JavaScript files were validated using ESLint JavaScript validator. All files passed however there were some rules that needed to be set in the eslintrc.js file as described below:

`"rules": {
        "react/prop-types": 0,
        "react/no-children-prop": "off",
        "react/display-name": "off"
    }`

  - `"react/prop-types": 0` was used to suppress the errors relating to prop-types
  - `"react/no-children-prop": "off"` was used to suppress the errors related to the Infinit Scroll component using children={} 
  - `"react/display-name": "off"` was used to suppress the need for a component display name 

### Chrome Dev Tools Lighthouse Validation

Lighthouse was used to test the performance, accessibility, best practice and SEO of the site. The validation was done for both desktop & mobile.  

#### Desktop 
<details><summary>Results</summary>

<details><summary>Main page (not logged in)</summary> 
<img src=""> 
</details>





#### Mobile 

<details><summary>Results</summary>

<details><summary>Main page (not logged in)</summary> 
<img src=""> 
</details>






### Wave Validation

The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.

<details><summary>Results</summary> 
<details><summary>Main page (not logged in)</summary> 
<img src=""> 
</details>




##### Back to [top](#tick-it)


## Testing

### Device Testing

This site was tested on the following devices:


### Browser compatibility

The website was tested on the following web browsers:
- Google Chrome (Version 112.0.5615.121)

 
### Manual testing

<summary>See Testing User Stories</summary>

#### Testing User Stories - Users

To avoid unnecessary repetition of images, only the feature being referred to will have screenshots. Information on how to navigate to the feature referred to will be described within its relevant table reference. 



| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|    |   |   | |

##### Back to [top]()


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |



##### Back to [top]()


## Deployment

### Heroku

This project was deployed to [Heroku](https://www.heroku.com) in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

The website was deployed with Heroku by following these steps:

1. Use the "pip freeze -> requiremnts.txt" command in the terminal to save any libraries that need to be installed in the file.
2. The app uses Cloudinary to host the post images therefore a Cloudinary account will be required. 
3. Log in to [Cloudinary](https://cloudinary.com/) or create an account for free.
4. Navigate to the Dashboard on Cloudinary
<details>
<summary>Screenshot</summary>
<img src="">
</details>

5. Copy and store the value of the 'API Environment Variable" beginning at cloudinary:// until the end, this will be used in the Heroku Config Vars. 
6. The app also uses ElephantSQL to host the database
7. Log in to [ElephantSQL](https://www.elephantsql.com/) or create an account for free.
8. Click on Create a new instance
<details>
<summary>Screenshot</summary>
<img src="">
</details>

9. Set up your plan. Give the 'plan' the desired name, select the Tiny Turtle (free) plan and leave tags blank.
<details>
<summary>Screenshot</summary>
<img src="">
</details>

10. Select the region and choose the nearest data centre to your location.
<details>
<summary>Screenshot</summary>
<img src="">
</details>

11. Click 'review' and if happy with the details presented click on the create instance button.
<details>
<summary>Screenshot</summary>
<img src="">
</details>

12. From the instances section click on the instance with the name that was just created.
13. Get the ElephantSQL database URL from the instance details page and copy, this will be used in the Heroku Config Vars
<details>
<summary>Screenshot</summary>
<img src="">
</details>

14. Navigate to https://www.heroku.com/ and login or create an account. 
15. Click the "new" button in the upper right corner and select "create new app".
<details>
<summary>Screenshot</summary>
<img src="">
</details>

16. Choose an app name and your region and click "Create app".
<details>
<summary>Screenshot</summary>
<img src="">
</details>

17. Reveal Config Vars and store the required config var names and values as below:

- `CLOUDINARY_URL`: *your Cloudinary URL as obtained above*
- `DATABASE_URL`: *your ElephantSQL postgres database URL as obtained above*
- `PORT`: `8000`
- `SECRET_KEY`: *your secret key*

<details>
<summary>Screenshot</summary>
<img src="">
</details>

18. Go to the "deploy" tab and pick GitHub as a deployment method.
19. Search for a repository to connect to and select the branch you would like to build the app from.
20. If preferred, enable automatic deploys and then deploy branch.
21. Wait for the app to build and then click on the "View" link which will redirect you to the deployed link.

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/Clinelly/ci_pp5_react_events) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your GitHub account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.
   
### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/Clinelly/ci_pp5_react_events) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone https://github.com/Clinelly/ci_pp5_react_events` and paste the previously copied URL at Step 4.
8. `$ clone `
9. Now press enter and the local clone will be created at the desired local location

##### Back to [top](#tick-it)


## Credits

### Tutorials


### Code

 Code from external sources were used as a basis and built on top of in this project, they are credited below:

 - The basis of this project was inspired by the 'Moments' social media platform walk-through project with Code Institute. Using this a a basis for user log in, profile creation and posting to the API I have built my own app and added extra functionality.

### Literature



### Misc




## Acknowledgements

I would like to also thank the following:
- My wife and family for their support and feedback whilst doing this project
- Code Institute tutor support who helped with the many issues I had during this project.
- My Code Institute mentor Mo Shami for his guidance through this project.


[Back to Top]()