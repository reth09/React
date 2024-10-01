export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/reth09');
    return response.json()
}