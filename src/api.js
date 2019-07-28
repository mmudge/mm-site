export default class Api {

  static getGithubEvents() {
    return fetch(`https://api.github.com/users/mmudge/events`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log("get user ", response);
        return response;
      })
      .catch(e => console.log("fetch didnt work", e))
  }

}

