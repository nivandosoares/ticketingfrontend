//async await fetch from api
const getTickets = async () => {
  const response = await fetch(
    "https://ticketingbackend-a6wl.onrender.com/api/list"
  );
  const data = await response.json();
  return data;
};

//update the DOM with the data
const updateDOM = (data) => {
  const tickets = document.querySelector(".tickets");
  data.forEach((ticket) => {
    const div = document.createElement("div");
    div.classList.add("ticket");
    let Solved;
    if (ticket.hasSolved == true) {
      Solved = "Sim";
    } else {
      Solved = "Não";
    }
    div.innerHTML = `
    <div class="tickets list-group">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="ticket_title mb-1">${ticket.ticketNumber}</h5>
        <h4 class="ticket_title mb-1">criado às: ${ticket.created_at}</h4>
        <small class="ticket_created_at"> ${ticket.device} com problema</small>
      </div>
      <p class="ticket_description mb-1">${ticket.description}</p>
      <p class="ticket_description mb-1">Atualizado às: ${ticket.updated_at}</p>
      <!-- verifiy if the ticket has been solved -->
      <small class="ticket_status">Resolvido: ${Solved}</small>
    </a>
  </div>
        `;
    tickets.appendChild(div);
  });
};

getTickets().then((data) => updateDOM(data));
