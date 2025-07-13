function toggleEpisodios() {
  const lista = document.getElementById("lista-episodios");
  lista.style.display = lista.style.display === "none" ? "block" : "none";
}

// Esconde os episódios por padrão
window.onload = () => {
  document.getElementById("lista-episodios").style.display = "none";
};
