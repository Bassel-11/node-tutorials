# Node.js Tutorials

A comprehensive collection of Node.js tutorials and examples for learning and development. This repository is designed to be easily cloned and used in your local development environment.

## 🚀 Quick Start

### Prerequisites
- Node.js 14.0.0 or higher
- npm (comes with Node.js)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bassel-11/node-tutorials.git
   cd node-tutorials
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the tutorials**
   ```bash
   # See all available tutorials
   npm start
   
   # Run a specific tutorial
   npm start hello-world
   node index.js hello-world
   
   # Development mode with auto-reload
   npm run dev
   ```

## 📚 Available Tutorials

- **hello-world** - Basic Node.js concepts and JavaScript fundamentals
- **fs-basics** - File system operations using the `fs` module
- **async-basics** - Asynchronous JavaScript: callbacks, promises, and async/await

## 🛠️ Development Workflow

### Adding New Tutorials

1. Create a new `.js` file in the `tutorials/` directory
2. Follow the existing tutorial structure and naming convention
3. Test your tutorial by running: `node index.js your-tutorial-name`

### Project Structure
```
node-tutorials/
├── index.js              # Main entry point
├── package.json           # Project configuration and dependencies
├── tutorials/             # Tutorial files
│   ├── hello-world.js
│   ├── fs-basics.js
│   └── async-basics.js
├── temp/                  # Temporary files (auto-created, ignored by git)
└── README.md              # This file
```

### Running in Development Mode

For continuous development with auto-reload:
```bash
npm run dev
```

This will restart the application automatically when you make changes to any files.

## 🔧 Local Environment Integration

This repository is configured for seamless integration with local development environments:

- **VS Code**: Works out of the box with Node.js extensions
- **WebStorm/IntelliJ**: Recognizes as Node.js project automatically
- **Debugging**: Use your IDE's Node.js debugging features
- **Linting**: Add ESLint configuration as needed
- **Testing**: Add testing framework of your choice

### Recommended VS Code Extensions
- Node.js Extension Pack
- JavaScript (ES6) code snippets
- Prettier - Code formatter
- ESLint

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-tutorial`
3. Add your tutorial in the `tutorials/` directory
4. Test your tutorial: `npm start your-tutorial-name`
5. Commit your changes: `git commit -m "Add new tutorial: your-tutorial-name"`
6. Push to the branch: `git push origin feature/new-tutorial`
7. Submit a pull request

## 🏷️ Tutorial Guidelines

When creating new tutorials:

1. **File naming**: Use kebab-case (e.g., `http-server.js`)
2. **Structure**: Include clear comments and section headers
3. **Console output**: Use emojis and formatting for better readability
4. **Error handling**: Include try-catch blocks where appropriate
5. **Next steps**: Point to related tutorials at the end

## 🚀 Scripts

- `npm start` - Run tutorials (with optional tutorial name)
- `npm run dev` - Development mode with auto-reload
- `npm test` - Run tests (when available)

## 📄 License

MIT License - feel free to use this code for learning and development.

## 🤝 Support

If you have questions or need help:
1. Check existing tutorials for similar examples
2. Create an issue in this repository
3. Contribute your own tutorials to help others learn

---

Happy coding! 🎉