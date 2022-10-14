const BASE = 'https://jsonplaceholder.typicode.com';

export const api = { 
  
  getAllPosts: async () => {
    let postsResponse = fetch(`${BASE}/posts`);
    let postsJson = await (await postsResponse).json();
    return postsJson;
  },
  
  addNewPosts: async (title: string, body: string, userId: number) => {
    try {
      let response = fetch(`${BASE}/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, body, userId }),
        headers: { 'Content-Type': 'application/json' }
      });

      let json = await ( await response ).json();

      return json;

    } catch (error) {
      return 'Erro'
    }
  }
}