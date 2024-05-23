
# ts-node-boilerplate

## Description
A Typescript NodeJS Express Boilerplate to kickstart projects. This boilerplate is configured with Docker, making development and deployment smoother and more consistent across different environments.

## Features
- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **Typescript**: Adds static types to JavaScript for more reliable code
- **Docker**: Simplify deployment and environment setup
- **Hot Reload**: Utilizes nodemon for hot reloading during development

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Docker (optional for Docker-based workflows)

### Installation

1. Clone the repository
```bash
git clone https://github.com/shaun49995/ts-node-boilerplate.git
```

2. Install dependencies
```bash
cd ts-node-boilerplate
npm install
```

3. Start the application
```bash
npm start
```

For development with hot reload:
```bash
npm run dev
```

## Scripts
- `npm start` - Build the project, and run the application.
- `npm run dev` - Start the application in development mode with hot reload.
- `npm run build` - Compile TypeScript to JavaScript.
- `npm run deploy` - Deploy the application to Google Cloud Run.

## Dependencies
- `dotenv`
- `express`

## DevDependencies
- `@types/dotenv`
- `@types/express`
- `@types/node`
- `nodemon`
- `ts-node`
- `typescript`

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## Bug Reporting
Found a bug? Please report it [here](https://github.com/shaun49995/ts-node-boilerplate/issues).

## License
This project is licensed under the MIT License.

## Author
Shaun Summerbee

## Keywords
- typescript
- nodejs
- express
- docker

---

Happy Coding!