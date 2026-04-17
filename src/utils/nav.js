export const showMenu = (toggleId, navId) => {
  const iconHamburguesa = document.getElementById(toggleId);
  const menu = document.getElementById(navId);

  iconHamburguesa.addEventListener("click", () => {
    //Añandir la clase
    iconHamburguesa.classList.toggle("show-icon");

    menu.classList.toggle("show-menu");
  });
};
