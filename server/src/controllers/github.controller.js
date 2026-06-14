const getGithubData = async (req, res) => {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { headers })
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    res.json({ user, repos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
};

module.exports = { getGithubData };