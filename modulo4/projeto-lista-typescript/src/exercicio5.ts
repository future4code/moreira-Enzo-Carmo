

const users = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


type People = {
    name:string,
    email: string,
    role: string
}

function selectAdmins(array: People[]) : string[] {
    const filteredAdmins = array.filter((admin) =>{
        return admin.role === "admin"
    })
    .map((admin) =>{
        return admin.email;
    })
    

    return filteredAdmins
};

console.log(selectAdmins(users))