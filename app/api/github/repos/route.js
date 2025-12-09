import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME || 'MUHRIS-AJ';

    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const perPage = searchParams.get('per_page') || '100';
    const sort = searchParams.get('sort') || 'updated';

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=${sort}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'portfolio-website'
        },
        next: { revalidate: 300 } // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          error: 'Failed to fetch repositories',
          message: errorData.message || 'Unknown error',
          status: response.status
        },
        { status: response.status }
      );
    }

    const repos = await response.json();

    // Filter out private repos and forks (optional, can be configured)
    const publicRepos = repos
      .filter(repo => !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        created_at: repo.created_at,
        topics: repo.topics || [],
        fork: repo.fork,
        homepage: repo.homepage
      }));

    return NextResponse.json(publicRepos, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

