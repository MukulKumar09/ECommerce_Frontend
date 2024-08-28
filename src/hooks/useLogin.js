import API from "../middleware/interface.js"
export function useLogin() {
  const login = async (email, password) => {
    const res = API.post("/users/login", {
      email,
      password,
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((res) => {
        console.log(res.response.data.error)
      })
  }
  return login
}
