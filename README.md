# Stable | Code Exercise

For this exercise, you'll implement a simple web application for users to view physical mail they've received at a Stable facility. Once the web application is complete, you'll demo and review it with a member of the Stable engineering team.

This exercise should take 2 - 4 hours to complete. 

### Requirements
* The web application resembles the provided mock-ups
* The mock mail item data provided in the `data.json` file (in the top level of this repository) is served to the frontend via an endpoint that supports pagination and search
* Users can paginate through the mail items when there are more than 6 mail items
* Users can search for mail
* The codebase is pushed to a remote repository

### Resources
* Assets
	* [Stable Logo](https://s3-us-west-2.amazonaws.com/usestable.com-assets/logos/stable-logo.svg)


* [Mock ups](https://www.figma.com/file/gLBkzFfAl8DttHK0jvYTFK/Engineering-Exercise?node-id=0%3A1)

### Schema
##### Defined in GraphQL Schema Language
```
type MailItem {
	id: ID!
	businessRecipient: String
	from: String!
	imageUrl: String!
	individualRecipient: String
	createdAt: Number!
}
```

### Suggested Frameworks / Libraries
* React
* Tailwind CSS

### Submission Instructions
* Share the repository link with your point of contact at Stable

Good luck!
