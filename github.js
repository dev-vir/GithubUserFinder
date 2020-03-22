class Github {
    constructor() {
        this.client_id = '5d8391dce76b180d5d22';
        this.client_secret = 'eecfbed997547035b17793607e3b6a057495ffd9';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profileData,
            repo: repos
        }
    }
}