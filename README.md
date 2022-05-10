![https://github.com/Night4dead](https://img.shields.io/badge/Night4dead-2021-%23f514c0)

![https://img.shields.io/badge/IUT%20METZ-LP%202021--2022-%23f514c0](https://img.shields.io/badge/IUT%20METZ-LP%202021--2022-%23f514c0)

----
[Trello](https://trello.com/choozen/home)

[ChooZen-backend](https://github.com/Night4dead/ChooZen-backend)

[ChooZen-frontend-test](https://github.com/Night4dead/ChooZen-frontend/tree/main/Documentation/Test%20Documentation)

----

# ChooZen-frontend

## Realized by :

[Quentin KACZMAREK](https://github.com/Night4dead)

[Kevin BOUDINA](https://github.com/kevinBoudina)

[Martin JOSSIC](https://github.com/sibzou)

[Julien SIBILLE](https://github.com/tehjul)

## Description :

Frontend part of the ChooZen project.

This app allows users to create groups, where they can invite friends, family, etc... 
Then, every user of a group can propose a movie/tv series to watch which will be added to a list. 
The goal is for every member of the group to communicate how much they want to watch something. So users of a group can vote on how soon they want to watch a proposed media.

An average score is then calculated, and on the `"Next"` page, the list of movies that a user has voted is displayed, sorted by the highest average score.

The goal is to simplify the process of choosing what to watch with people you tend to watch movies / tv series with often. When you want to watch something, just go to the `"Next"` page and watch the highest rated movie/tv series.

In further iterations of the app, there will be multiple filters to make the list more precise, like filtering by genre, type (movie, tv series, shortfilm, etc...).

Written in react-native.

## Dependencies

To run the expo project you'll need:
- a recent version of `nodejs` (recommended LTS 16)
- [expo-cli](https://docs.expo.dev/get-started/installation/)
- an android emulator (follow [this guide](https://docs.expo.dev/workflow/android-studio-emulator/))
- or a physical device (read the doc for [expo-cli](https://docs.expo.dev/get-started/installation/), you need to download the expo app)

## Run the project

Open a terminal to run the following commands.

Clone the repository:
> ```bash
>   git clone https://github.com/Night4dead/ChooZen-frontend
>```

Then move into the directory:
>```bash
>   cd ChooZen-frontend/
>```

Before running expo, you need to install the different packages, run this command:
>```bash
>   npm install
>```

### Config Server

Before being able to run the project, you'll need to configure the server address.

To do so, copy the file named `api.js.template` and remove the `.template` suffix. Then, fill the `URLSERV` variable with the address of your server.


### Start project

Once in the directory, you can run expo and test the app:
>```bash
>   expo start
>```

Once the project starts, just scan the QR Code that appear in your terminal, or type `a` in the running terminal to open the android emulator (if you type `w` you can run the web version, but for now the registration won't work since the birthdate input is only native).

To stop the expo project, just type `CTRL+C`.
