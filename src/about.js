const content = document.querySelector("#content");

export default function aboutContent() {
  const about = document.createElement("div");
  about.classList.add("about");
  const h2 = document.createElement("h2");
  h2.innerHTML = `lorem ipsum dorem`;
  about.appendChild(h2);
  const p = document.createElement("p");
  p.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius in
          dolorum veritatis.`;
  about.appendChild(p);

  content.appendChild(about);
}
