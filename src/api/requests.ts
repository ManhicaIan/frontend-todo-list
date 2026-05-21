export async function fetchData(setData:Function){
    try {
        const response = await fetch("https://api-todo-list-od5s.onrender.com/api/v1/task");
        if (!response.ok) throw new Error("Error while fetching data");

        const data = await response.json();
        setData(data);
    } catch (error) {
        console.log(error);
        
    }
}

export async function addTask(data:object) {
    try{
        const response = await fetch('https://api-todo-list-od5s.onrender.com/api/v1/task', {
            method: 'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        });
        
        if (!response.ok) return new Error("Error while adding task");

        return await response.json();
        
    }catch(error){
        console.log(error);
        
    }
    
}
