# Ibrahim Sumon - Portfolio Website

A modern, responsive portfolio website built with Angular 20 and Tailwind CSS, showcasing professional experience, skills, projects, and achievements.

![Portfolio Website](https://img.shields.io/badge/Angular-20.3.9-red)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🌟 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Fully Responsive**: Optimized for desktop, laptop, tablet, and mobile devices
- **Single Page Application**: Fast navigation with Angular routing
- **MVP Award Section**: Special highlight for the 2024 Most Valuable Person award
- **Interactive Components**: Smooth animations and transitions
- **Downloadable CV**: Direct download link for resume
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Built with SEO best practices

## 📋 Sections

1. **Home** - Hero section with introduction and MVP award highlight
2. **About** - Professional summary and core values
3. **Skills** - Comprehensive technical skills categorized by domain
4. **Experience** - Work history with key achievements
5. **Education** - Academic background and professional certifications
6. **Projects** - Portfolio of completed projects
7. **Awards** - Detailed information about awards and recognition
8. **Contact** - Contact information and inquiry form

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ibrahimsumon1994/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🛠️ Development

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
npm test
```

### Code Linting

```bash
npm run lint
```

## 📦 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Access your site at `https://ibrahimsumon1994.github.io/Portfolio/`

#### Manual Deployment

To deploy manually:

1. Build the project:
```bash
npm run build -- --base-href=/Portfolio/
```

2. Deploy the `dist/portfolio-app/browser` folder to your hosting provider

### Other Hosting Options

#### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/portfolio-app/browser`

#### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Angular configuration
3. Deploy with one click

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit component HTML files in `src/app/components/`
- **Styling**: Modify `tailwind.config.js` for theme customization
- **Images**: Place images in `public/assets/` directory
- **CV**: Replace `public/assets/cv.pdf` with your resume

### Color Scheme

The default color scheme uses:
- Primary: Blue (Tailwind `blue-600`)
- Secondary: Indigo (Tailwind `indigo-600`)
- Accent: Green (Tailwind `green-600`)

Modify in `tailwind.config.js` to change the theme.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **Framework**: Angular 20.3.9
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript 5.x
- **Build Tool**: Angular CLI
- **Routing**: Angular Router
- **Forms**: Angular Forms
- **Deployment**: GitHub Pages / GitHub Actions

## 📄 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── education/
│   │   │   ├── projects/
│   │   │   ├── awards/
│   │   │   ├── contact/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   ├── app.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css
│   └── main.ts
├── public/
│   └── assets/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── angular.json
├── package.json
├── tailwind.config.js
└── README.md
```

## 🤝 Contributing

This is a personal portfolio website. However, if you find any bugs or have suggestions, feel free to open an issue.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ibrahim Sumon**
- Senior Software Engineer
- MVP 2024 - Insightin Technology

## 🏆 Awards

- **Most Valuable Person (MVP) of the Year 2024** - Insightin Technology

## 📧 Contact

For inquiries, please use the contact form on the website or reach out via:
- Email: ibrahim.sumon@example.com
- LinkedIn: [linkedin.com/in/ibrahimsumon](https://linkedin.com/in/ibrahimsumon)
- GitHub: [github.com/ibrahimsumon1994](https://github.com/ibrahimsumon1994)

---

App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
