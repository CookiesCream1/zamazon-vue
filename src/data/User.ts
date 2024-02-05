import { defineStore } from "pinia";

const fakelogin = async (_: string, __: string) => {
    await new Promise(t => setTimeout(t, 300))
    return {success: true, jwt: "amogus"}
}

type user = {
    tag: "logged in"
    name: string
    jwt: string
} | {
    tag: "not logged in"
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): user => ({
        tag: "not logged in"
    }),
    actions: {
        logout() {
            this.$reset()
        },
        async login(name: string, password: string) {
            let login = await fakelogin(name, password)
            if (!login.success) {
                return false
            }
            this.$patch({
                tag: "logged in",
                name: name,
                jwt: login.jwt,
            })
        }
    }
})