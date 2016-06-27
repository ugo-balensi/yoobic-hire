# YOOBIC London Dev Hiring Project
## The toc
 + [The vision](#the-vision)
 + [The big picture](#the-big-picture)
 + [The spec](#the-spec)
 + [The git tips](#the-git-tips)
 + [The designs](#the-designs)
 + [The guides](#the-guides)
 + [The lifeline](#the-lifeline)

## The vision
Hi, thanks your interest in YOOBIC and for agreeing to take on this small project. This will help us get to know you and your skills a bit better, and will hopefully be more fun and more useful than coding on a whiteboard.

We want you to build a a small demo app in [ionic2](https://github.com/driftyco/ionic/tree/2.0). We're using ionic2 internally at YOOBIC to build a version of our mobile app for legacy devices, and a lot of the work in this role is going to be about building ionic2 app components.

Since you're applying as a more senior dev we're going to expect you to be able to follow [a spec](#the-spec). 


## The big picture
Please create an ionic2 app with the following [views](#views).
You should write services to handle the logic, and either mock the functionality of a backend with the app's data store or actually pull data from external APIs.

![wireframes](https://cloud.githubusercontent.com/assets/1513265/15188880/a24de426-17b0-11e6-82fd-252b59b9c8d3.png)

## The spec
#### Views
|**View**|  **Description**  |  **Desired behaviour** |
|-----------------|---------------|-------------------|
|**Sign-in**|  A sign-in view. Standard stuff.  |  Your app should have some logic for handling logins with a User entity. You can mock a backend in the store with a bunch of mocked users or pull from https://randomuser.me/|
|**Menu**|  Make a side menu with some nav links. See the wireframe above.  |  Standard nav menu. If you want, add a profile view to display user data.|
|**Master List**|  This should be a list of item cards. The cards for the items can look however you want, but they need to display a `picture`, a `title`, and `some details or text` from the item. Add some interactive elements to the cards, e.g. upvote/downvote buttons or badges, but they aren't at all necessary. Add a FAB to create/add a new item.  |  The list should scroll, bonus points for infinite scroll. These should be populated from an external source, and put in a store. You can just use an open data API like the Star Wars API or http://www.omdbapi.com/. Clicking a card in the list should take the user to the detail view for that card's item. Clicking on the FAB should add an item to the list/store. If you want, you can add an item detail edit view, but you can also just have the button fetch & insert another item from the backend.|
|**Detail**|  This is a detail view for the item selected. It is primarily just a bigger version of the item's card from the master list view. It should display the picture from the card, but the picture should bigger. It should have the title, but bigger. It should have the details from the card, but more or all of them. Include a button that takes you back to the master list view. If you add the edit/create view, make sure you have an edit button to take you there from the detail view.  |  Add the interactive elements you chose for the cards. Use the back button (and the menu). If you added interactive buttons on the cards in the master list view, go ahead and add the same here, probably as bar buttons after the detailed body information.|
|**Chat**         |  Make a chat view that can display chats and send messages.|Mock the backend with a store of chat messages. Mock the chat history with users from the user service, etc.|

#### Language
While you can build the app in either [TypeScript](https://www.typescriptlang.org/) or JavaScript (ES2015/16), we ***strongly*** recommend using TypeScript, since much of the documentation for angular2 & ionic2 out there is in TypeScript. However, if you prefer and/or are just more comfortable in javascript, we're cool with either one.


## The git tips

>**Git Tip 1**: *Commit early, commit often.* While it's okay if you miss some stuff, it'll help us greatly in reviewing your project if you try to commit regularly using git. We recommend doing an initial commit immediately after finishing the tutorial, in case you need to start over from there.

>**Git Tip 2**: *Clear commit messages.* The better your commit messages, the better your `git log`. While you're not likely to take a lot of breaks in the middle of working on the project, this will make it easier to understand what you thought happened when you made that commit a few hours ago. Feel free to whatever style of commit messages you prefer or are most comfortable  for this project, as long as it's clear and understandable. The best commit message guidelines we've encountered (and the one we use at YOOBIC) are from the [Angular/Angular Contrib Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

## The designs
You can check out our [style guide](https://app.frontify.com/d/GEu6ejIkiL3x/yoobic-style-guide) for color ideas if you don't have your own. Also if you're really keen you can try to replicate our app's designs. Take a look at the images in the [Current Designs](current-designs) folder in this repo.

## The guides
##### Ionic2
 + [Docs](http://ionicframework.com/docs/v2/)
 + [Building apps with Ionic 2](http://adamdbradley.github.io/building-with-ionic2/#/)
 + [Ionic Conference App (complete ionic2 example app)](https://github.com/driftyco/ionic-conference-app)

##### Angular2
 + [Docs](https://angular.io/docs/)
 + [5-minute Quickstart](https://angular.io/docs/ts/latest/quickstart.html)
 + [Tutorial](https://angular.io/docs/ts/latest/tutorial/)
 + [Awesome Angular2](https://github.com/AngularClass/awesome-angular2) (curated list from [AngularClass](https://angularclass.github.io/)

##### Typescript
 + [Official Tutorial](https://www.typescriptlang.org/docs/tutorial.html)
 + [Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)
 + [TypeStrong's typescript workshop](https://github.com/TypeStrong/learn-typescript)

## The lifeline
If you're done, desperate, or just want to chat about the project, get in touch with your contact at YOOBIC (probably Avi, @thaiat, or myself, @jskrzypek) by email. Go ahead and tag/preface the subject with `[Hiring-project]`). I can answer any questions you might have or schedule time for a skype chat to help you out if you get stuck. Don't hesitate to ask for help if you need it, but please try it on your own first even if you think you didn't get it. You probably understood more than you thought. Asking for help won't be held against you, but don't use me as a crutch.

### GOOD LUCK!