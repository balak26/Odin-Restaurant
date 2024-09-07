export default function homeContent() {
  const content = document.querySelector("#content");

  const heading = document.createElement("div");
  heading.classList.add("heading");
  const h1 = document.createElement("h1");
  h1.innerHTML = "Almaz Restaurant";
  heading.appendChild(h1);
  const h2 = document.createElement("h2");
  h2.innerHTML = `Experience Culinary Bliss at Our Exquisite Restaurant`;
  heading.appendChild(h2);
  const p = document.createElement("p");
  p.innerHTML = `Indulge in an unforgettable dining experience at our exquisite
            restaurant, where every dish is a masterpiece crafted with passion and
            expertise. From the moment you step through our doors, you are
            enveloped in an ambiance of warmth and elegance, setting the stage for
            a culinary journey like no other.`;
  heading.appendChild(p);

  content.appendChild(heading);

  const hours = document.createElement("div");
  hours.classList.add("working-hours");
  const h3 = document.createElement("h3");
  h3.innerHTML = `Hours`;
  hours.appendChild(h3);
  const ul = document.createElement("ul");
  ul.innerHTML = ` <li>Sunday: 11am - 9pm</li>
            <li>Monday: 8am - 8pm</li>
            <li>Tuesday: 8am - 8pm</li>
            <li>Wednesday: 8am - 8pm</li>
            <li>Thursday: 8am - 8pm</li>
            <li>Friday: 8am - 8pm</li>
            <li>Saturday: 11am - 11pm</li>`;

  hours.appendChild(ul);

  content.appendChild(hours);

  const location = document.createElement("div");
  location.classList.add("location");
  const p2 = document.createElement("p");
  p2.innerHTML = `123 Morocco st, Safeway, Friendship Park`;
  location.appendChild(p2);

  content.appendChild(location);
}
