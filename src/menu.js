const content = document.querySelector("#content");

export default function menuContent() {
  const h2 = document.createElement("h2");
  h2.innerHTML = "Menu";
  content.appendChild(h2);

  const drinks = document.createElement("div");
  drinks.classList.add("drinks");
  const drinksHeading = document.createElement("h2");
  drinksHeading.innerHTML = "Drinks";
  drinks.appendChild(drinksHeading);
  const drink = document.createElement("div");
  drink.classList.add("drink");
  drink.innerHTML = `<h3>Honey Wine</h3>
          <p>
            Indulge in our exquisite honey wine, a delightful blend of sweet
            honey notes with hints of floral and fruity undertones, offering a
            refreshing and sophisticated taste experience.
          </p>
          <h4>$5</h4>`;

  drinks.appendChild(drink);

  const drink2 = document.createElement("div");
  drink2.classList.add("drink");
  drink2.innerHTML = `<h3>Tropical Paradise Smoothie</h3>
          <p>
            A refreshing blend of pineapple, mango, banana, and coconut milk,
            creating a tropical escape in every sip.
          </p>
          <h4>$5</h4>`;

  drinks.appendChild(drink2);
  content.appendChild(drinks);

  const deserts = document.createElement("div");
  deserts.classList.add("deserts");
  const desertHeading = document.createElement("h2");
  desertHeading.innerHTML = "Deserts";

  deserts.appendChild(desertHeading);

  const desert = document.createElement("div");
  desert.classList.add("desert");
  desert.innerHTML = `<h3>Velvety Tiramisu</h3>
          <p>
            Layers of espresso-soaked ladyfingers and mascarpone cheese, dusted
            with cocoa powder and served with a dollop of whipped cream.
          </p><h4>$15</h4>`;
  deserts.appendChild(desert);
  const desert2 = document.createElement("div");
  desert2.classList.add("desert");
  desert2.innerHTML = `<h3>Homemade Apple Pie</h3>
          <p>
            A comforting slice of warm apple pie with a flaky crust, filled with
            tender cinnamon-spiced apples, served with a scoop of creamy vanilla
            ice cream.
          </p><h4>$15</h4>`;
  deserts.appendChild(desert2);
  const desert3 = document.createElement("div");
  desert3.classList.add("desert");
  desert3.innerHTML = `<h3>Luscious Crème Brûlée</h3>
          <p>
            A silky smooth vanilla custard topped with a caramelized sugar
            crust, elegantly presented with fresh berries and a delicate tuile
            cookie.
          </p><h4>$15</h4>`;
  deserts.appendChild(desert3);

  content.appendChild(deserts);
}
