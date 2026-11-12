//api destructuring

const {status, message, data:{user:{id,name,email},roles:[primaryRole = "GUEST"] = []}} = {
    status: 200,
    message: "Success",
    data: {
        user: {
            id: 101,
            name: "Priya",
            email: "priya@example.com"
        }
        ,roles: ["ADMIN", "USER"]
    }
};

console.log(
`status: ${status}
message: ${message}
id: ${id}
name: ${name}
email: ${email}
primaryRole: ${primaryRole}`);