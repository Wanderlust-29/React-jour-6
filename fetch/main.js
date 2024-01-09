document.addEventListener("DOMContentLoaded", async () => {

  async function afficherPost() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();

      for (let i = 0; i < 4; i++) {
        let title = document.querySelector(`#post-${i + 1} .post-title`);
        let body = document.querySelector(`#post-${i + 1} .post-body`);

        title.innerText = posts[i].title;
        body.innerText = posts[i].body;
      }
    } catch (error) {
      console.error("Erreur", error);
    }
  }

  async function postForm() {
    let count = 5;
    const postForm = document.getElementById("postForm");
    postForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const titleInput = document.getElementById("title");
      const bodyInput = document.getElementById("body");

      const title = titleInput.value;
      const body = bodyInput.value;

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
        });
        const postValue = await response.json();
        
        const ul = document.querySelector("ul");
        
        const li = document.createElement("li")
        ul.appendChild(li);
        
        const article = document.createElement("article");
        article.classList.add("post-" + count++);
        li.appendChild(article)

        const h1 = document.createElement("h1");
        h1.classList.add("post-title");
        h1.innerText = postValue.title;

        const p = document.createElement("p");
        p.classList.add("post-body");
        p.innerText = postValue.body;

        article.appendChild(h1);
        article.appendChild(p);

        

        console.log("Post submitted successfully!");
      } catch (error) {
        console.error("Erreur", error);
      }
    });
  }

  afficherPost();
  postForm();
});
