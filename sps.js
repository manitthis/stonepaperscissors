const score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lost: 0,
    tie: 0,
  };

  updscore();

  function play(pmove) {
    const move = computermove();
    let result;
    if (pmove === "stone") {
      if (move === "paper") {
        result = "lost";
      } else if (move === "stone") {
        result = "tie";
      } else {
        result = "win";
      }
    } else if (pmove === "paper") {
      if (move === "paper") {
        result = "Tie";
      } else if (move === "stone") {
        result = "win";
      } else {
        result = "lost";
      }
    } else {
      if (move === "paper") {
        result = "win";
      } else if (move === "stone") {
        result = "lost";
      } else {
        result = "Tie";
      }
    }

    if (result === "win") {
      score.win = score.win + 1;
    } else if (result === "lost") {
      score.lost = score.lost + 1;
    } else {
      score.tie += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updscore();

    document.querySelector(".js-result").innerHTML = `<pre>              ${result} </pre> `;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `you choose <img src="${pmove}-emoji.png" alt="stone" class="icon"/> and computer choose
    <img src="${move}-emoji.png" class="icon"/>`;
  }

  function updscore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `wins :: ${score.win}, Lost :: ${score.lost}, Tie :: ${score.tie}`;
  }
  function computermove() {
    let move = "";
    const ramnum = Math.random();

    if (ramnum >= 0 && ramnum <= 1 / 3) {
      move = "stone";
    } else if (ramnum >= 1 / 3 && ramnum <= 2 / 3) {
      move = "paper";
    } else if (ramnum >= 2 / 3 && ramnum <= 1) {
      move = "scissors";
    }

    return move;
  }