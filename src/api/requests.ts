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

interface TaskData {
    title: string;
    description: string;
}

interface ValidationError {
    field: string;
    message: string;
}

interface ApiErrorResponse {
    error: string;
    errors?: ValidationError[];
    status: number;
}

export async function addTask(data: TaskData) {
    const response = await fetch(
        'https://api-todo-list-od5s.onrender.com/api/v1/task',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        const errorData: ApiErrorResponse = await response.json();

        if (response.status === 422 && errorData.errors) {
            const fieldErrors: Record<string, string> = {};

            errorData.errors.forEach(({ field, message }) => {
                fieldErrors[field] = message;
            });

            throw fieldErrors;
        }

        throw { general: errorData.error ?? `Erro ${response.status}` };
    }

    return await response.json();
}
