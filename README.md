# Website

The source code of my personal website, which is built using VueJS.

## Features

- Utilising [Revard](https://github.com/meppu/revard) for Revolt and [Lanyard](https://github.com/Phineas/lanyard) for Discord status.
- Fetching repositories dynamically using the GitHub API.
- Incorporating icons from various sources:
  - Navigation bar and star icons are obtained from the [MingCute Icon Collection](https://icones.js.org/collection/mingcute).
  - Erlang icon is extracted from [VSCode Symbols extension](https://github.com/miguelsolorio/vscode-symbols).
  - All other icons for technologies view are obtained from [Simple Icons](https://simpleicons.org/).
- The navigation bar features a click sound effect which is obtained from [MixKit](https://mixkit.co/free-sound-effects/click/).

## Project Setup

Follow these steps to set up the project:

1. Install the necessary dependencies using npm:

   ```sh
   npm install
   ```

2. To launch the development environment with hot-reloading, use the following command:

   ```sh
   npm run dev
   ```

3. For production deployment, use the following command:

   ```sh
   npm run build
   ```

## Code Quality

Ensure code quality by running ESLint:

```sh
npm run lint
```

## License

This website is licensed under the MIT License.
