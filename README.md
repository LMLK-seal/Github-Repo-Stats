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

---

# Views vs Unique Visitors

## Overview

Understanding the difference between views and unique visitors is crucial for analyzing your repository's performance and audience engagement.

## Metric Definitions

### Views
**Views** represent the total number of times your repository page has been loaded. 

- **Counting Method**: Each page load is counted as one view
- **Example**: If one person visits your page 10 times, that counts as **10 views**
- **What it measures**: Overall activity and interest levels

### Unique Visitors
**Unique Visitors** represent the number of individual people who have viewed your repository.

- **Counting Method**: Each person is counted only once per day, regardless of how many times they visit
- **Example**: If the same person visits your page 10 times in one day, they are counted as **1 unique visitor** for that day
- **What it measures**: The size and reach of your audience

## Why Both Metrics Matter

Both metrics provide valuable insights into different aspects of your audience's behavior:

| Metric | What It Tells You | Usefulness |
|--------|------------------|------------|
| **Views** | Measures overall activity and interest. A high view count indicates your repository is receiving significant attention, even if from a smaller group of engaged users. | **Immediate Impact**: Ideal for assessing the short-term impact of promotions, such as tweets or blog posts. A spike in views indicates your content is being actively shared and consumed. |
| **Unique Visitors** | Measures the size and reach of your audience. This metric reveals how many different individuals are discovering and engaging with your project. | **Long-term Growth**: Best for understanding sustainable growth patterns. A steadily increasing unique visitor count indicates you're consistently attracting new people, not just repeat visits. |


🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📝 License

Distributed under the ISC License. See `LICENSE` file for more information.