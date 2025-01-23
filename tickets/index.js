const tickets = [
  { from: "Saint-Petersburg", to: "Moscow" },
  { from: "Samara", to: "Kazan" },
  { from: "Sochi", to: "Krasnodar" },
  { from: "Kazan", to: "Saint-Petersburg" },
  { from: "Moscow", to: "Sochi" },
];

/**
 * @param {{ from: string, to: string }[]} tickets
 * @returns {{ from: string, to: string }[]}
 */
const buildRoute = (tickets) => {
  const ticketsFromCity = new Map();
  const ticketsToCity = new Map();
  const cities = new Set();

  for (let i = 0; i < tickets.length; ++i) {
    const ticket = tickets[i];
    const { from, to } = ticket;

    ticketsToCity.set(to, ticket);
    ticketsFromCity.set(from, ticket);
    cities.add(to);
    cities.add(from);
  }

  for (let ticketToCity of ticketsToCity.keys()) {
    cities.delete(ticketToCity);
  }

  let [start] = [...cities];

  const result = [];

  while (start) {
    const ticket = ticketsFromCity.get(start);

    if (!ticket) {
      break;
    }

    result.push(ticket);

    start = ticket.to;
  }

  return result;
};

console.log(buildRoute(tickets));
