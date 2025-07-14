// get-stats.js (Final Version)

// At the very top, load environment variables from the .env file.
require('dotenv').config();

const axios = require('axios');

// Get the token from the .env file via process.env.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * The main function to fetch and display GitHub repository traffic data.
 */
async function getRepoTraffic() {
  const repoName = process.argv[2];

  if (!repoName || !repoName.includes('/')) {
    console.error('\n❌ Error: Please provide the repository name in the format "owner/repo".');
    console.log('   Example: node get-stats.js facebook/react\n');
    return;
  }

  if (!GITHUB_TOKEN) {
    console.error('\n❌ Error: GITHUB_TOKEN not found.');
    console.error('   Please ensure you have a .env file with your token and are running the script from the same directory.\n');
    return;
  }

  const apiUrl = `https://api.github.com/repos/${repoName}/traffic/views`;
  console.log(`\nFetching traffic data for: ${repoName}...`);

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    const { count, uniques, views } = response.data;

    console.log('\n✅ Success! Here are the stats for the last 14 days:');
    console.log('--------------------------------------------------');
    console.log(`   Total Views:     ${count.toLocaleString()}`);
    console.log(`   Unique Visitors: ${uniques.toLocaleString()}`);
    console.log('--------------------------------------------------\n');

    console.log('Daily Breakdown:');
    views.forEach(dailyData => {
      const date = dailyData.timestamp.split('T')[0];
      const dailyViews = dailyData.count.toString().padStart(5, ' ');
      const dailyUniques = dailyData.uniques.toString().padStart(5, ' ');
      
      console.log(`   - ${date} | Views: ${dailyViews} | Uniques: ${dailyUniques}`);
    });
    console.log('\n');

  } catch (error) {
    if (error.response) {
      console.error(`\n❌ API Error: ${error.response.status} - ${error.response.statusText}`);
      console.error('   The token was sent, but GitHub rejected it. Please double-check token scopes and repo permissions.\n');
    } else if (error.request) {
      console.error('\n❌ Network Error: Could not connect to the GitHub API. Please check your internet connection.\n');
    } else {
      console.error('\n❌ An unexpected error occurred:', error.message, '\n');
    }
  }
}

getRepoTraffic();