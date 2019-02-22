# Muster the Fleet 
A fullstack, MongoDB, Express, React, and NodeJS stack application for building a fleet to play Star Wars: Armada

## Getting Started
- Navigate to the directory you want the entire project, and run `git status` to see if there is a repository present
- Navigate to the project, `cd armada-builder-react`, then into the server directory, `cd server/`
- Run `npm install` to install all of the dependancies for server side of the project
- Upon completion, navigate to the `client/` directory, `cd client/`
- Once more, run `npm install` to install the client side dependancies
- Finally, from the `server/` directory, run `npm run dev` to start both the client and server, simultaneously

## Contributing
If you'd like to contribute to this project, follow the below steps.
- Fork this repository
- Follow the above steps, subtituting the `git clone` URL for your own, found by clicking the green button that says "clone or download"
- From within your forked clone, run `git checkout -b <newBranchName>`
- Make your changes / additions and push to your forked repository's new branch, `git push origin <newBranchName>`
- Submit a Pull Request, comparing the original master branch as the base, to your forked `<newBranchName>` as the comparing source

## Architecture
This web application uses React, Redux to render the client side content. It is driven by a NodeJS RESTful API to send data from a MongoDB database.

## Case Study
This project came to be as a learning tool. It was originally written using `jQuery` -> [here](https://github.com/caldwell619/armada-fleet). As skills increased, the application was eventually transfered to React. The secondary purpose of this project is that one does not exist for free. Even though Lucasfilm™ owns Star Wars™, there was still a paywall to use an existing 3rd party, data persistent fleetbuilder.    




