class UserTemplate{
    constructor(name,password,age,data) {
        this.name = name
        this.password = password
        this.age = age
        this.data = data
        this.connected = false
    }
    
    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }
    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }
    checkStatus() {
        console.log(this.connected)
    }
}