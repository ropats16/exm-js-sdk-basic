export function handle(state, action) {
  state.users.push(action.input.name);
  return { state }
}