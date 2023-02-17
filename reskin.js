const cards = Array.from(document.querySelectorAll(".backlog-item-card"))

const assigned = (card) => {
  const assignees = card.querySelector(".backlog-item-card-assignees")
  return assignees.innerHTML.includes("StephenCrane")
}

const committed = (card) => {
  const tagSection = card.querySelector(".backlog-item-card-description-meta")
  return tagSection.innerHTML.includes("committed")
}

const blocked = (card) => {
  const tagSection = card.querySelector(".backlog-item-card-description-meta")
  return tagSection.innerHTML.includes("blocked")
}


cards.forEach( card => {
  if (blocked(card)) {
    card.style.backgroundColor = "#fae7d2"
  } else if (assigned(card) && committed(card)) {
    card.style.background = "linear-gradient(-45deg, #d4ffd9 0%, #d4ffd9 50%, #CCE7FF 50%, #CCE7FF 100%)"
  } else if (assigned(card)) {
    card.style.backgroundColor = "#d4ffd9"
  } else if (committed(card)) {
    card.style.backgroundColor = "#CCE7FF"
  }
})
