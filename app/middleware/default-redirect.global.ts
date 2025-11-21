export default defineNuxtRouteMiddleware((to, from) => {
  // Если пользователь заходит на корневой путь
  if (to.path === "/") {
    return navigateTo("/cheeseburger", { replace: true });
  }
});
