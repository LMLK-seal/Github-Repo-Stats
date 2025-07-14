# GitHub Repo Traffic Stats

![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

A simple Node.js script to fetch and display traffic statistics (views and unique visitors) for a specified GitHub repository using the GitHub API.

This tool provides a quick way to see recent traffic data directly from your terminal, requiring a GitHub Personal Access Token with the necessary permissions.

✨ Features

*   Fetches total views and unique visitors for the last 14 days.
*   Displays a daily breakdown of views and unique visitors.
*   Uses environment variables (`.env`) to securely store your GitHub Personal Access Token.
*   Provides helpful error messages for invalid input or API issues.

📚 Tech Stack

*   **Language:** JavaScript (Node.js)
*   **Libraries:**
    *   [Axios](https://axios-http.com/) (Promise-based HTTP client)
    *   [Dotenv](https://github.com/motdotela/dotenv) (Loads environment variables from a `.env` file)

🚀 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/github-repo-stats.git
    cd github-repo-stats
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the root directory of the project.

4.  **Obtain a GitHub Personal Access Token:**
    *   Go to your GitHub Settings > Developer settings > Personal access tokens > Tokens (classic).
    *   Click "Generate new token".
    *   Give your token a descriptive name (e.g., `repo-stats-script`).
    *   Crucially, select the `repo` scope, specifically ensure `repo:traffic` is checked.
    *   Click "Generate token".
    *   **Copy the generated token immediately.** You won't be able to see it again.

5.  **Add your token to `.env`:**
    Open the `.env` file you created in step 3 and add the following line, replacing `Your_key_here` with the token you copied:
    ```env
    GITHUB_TOKEN=Your_key_here
    ```

▶️ Usage

Run the script from your terminal, providing the repository name in the format `owner/repo` as a command-line argument.

```bash
node get-stats.js owner/repository
```

**Example:**

```bash
node get-stats.js facebook/react
```

The script will then fetch and print the traffic data for the specified repository.

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📝 License

Distributed under the ISC License. See `LICENSE` file for more information.