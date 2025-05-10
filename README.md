# CodeMotion Madrid 2025 - Lastminute.com
## Flip the script: Dependency inversion in JS/TS based mobile apps

This [Expo](https://expo.dev) project aims to showcase some of the proposed strategies to achieve dependency injection on a react-native based application project.

## How to navigate through the code

We decided to create different branches for each of the proposed strategies. We applied them in an incremental way, so you can see how the code evolves.

## Branches
### [main](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/main)
Initial code of the app, with no dependency injection applied. Code is working but we exposed some of the non-functional problems we will try to solve.
### [basic-dependency-inversion](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/basic-dependency-inversion)
The First step to move into dependency injection is to apply the dependency inversion principle. We will create an interface for the store we are using and inject it into the use case. This way we can decouple the use case from the implementation of the store.
### [singleton-provisions](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/singleton-provisions)
By creating provision files per module and layer, we can split the configuration of the application from the implementation. This way we can create and provide a single instance of the store and inject it into the use case.
### [factory-methods](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/factory-methods)
To fully invert dependencies in our domain, we need to remove all imports to outer layers. Migrating our use cases into factories will give us the flexibility to prepare them to inject the dependencies we need. This way we can create a use case not coupled to the implementation of the store.
### [service-locator](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/service-locator)
Now the code is in a better shape, and our domain is agnostic of the outer layers, we can proceed and start including a tool to manage dependencies in a better way. We will use the service locator to inject the store into the use case.
### [dependency-injection](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/dependency-injection)
By including the service locator, we included back some of our old "dependency inversion" problems. Let's move to the dependency injection pattern to try to solve them once for all.
### [di-context](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/di-context)
We noticed the ui layer is still missing a bit of help to achieve the configurability we want. Let's use React Context to inject the dependencies we need in the ui layer in a controlled way.
### [dependency-injection-plus-inversify](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/dependency-injection-plus-inversify)
Going back to the roots. Let's try to use a dependency injection library to manage our dependencies. We will use [inversifyJS](https://inversify.io/docs/introduction/getting-started/) in replacement of our own DI implementation. Let's see how easy is to replace it by following the concepts we presented before.
### [inversify-js](https://github.com/lastminute-com/codemotion-madrid-2025-lm-talk/tree/inversify-js)
We will try to use the same library but by following their suggested approach. Let's check and compare the differences between this and the previous implementation.


### Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
