export const AUTHENTICATE_MUTATION = `
mutation {
  authenticate(credentials: { username: "kalle", password: "password" }) {
    accessToken
  }
}
`;