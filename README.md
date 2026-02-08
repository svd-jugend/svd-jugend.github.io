# SV Dettingen/Erms Jugend Website (React Migration)

This project is a React-based rewrite of the original static HTML website for the SV Dettingen/Erms Jugendabteilung.
It uses Vite as the build tool and React Router for navigation.

## Project Structure

- `src/components/`: Reusable components (Header, Footer, Layout).
- `src/pages/`: Page components corresponding to the original HTML files.
- `src/assets/`: Global styles (`index.css`) and entry point logic.
- `public/assets/`: Static assets like images and downloadable files.
- `legacy_source/`: The original static HTML source files (for reference).

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```
    The output will be in the `dist/` directory.

## Features

- **Routing:** Client-side routing with `react-router-dom`.
- **Map:** Interactive map using `react-leaflet`.
- **Contact Form:** Submission to Google Apps Script with reCAPTCHA protection and SweetAlert2 notifications.
- **Styling:** Maintained original styling via global CSS and Bootstrap integration.

## License

See the original repository for license details.
