const base_path = 'https://nest-microservice-demo.herokuapp.com';

export const getHealthCheck = async () => {
    const response = await fetch(base_path);
    const result = await response.json();
    console.log(result);
    return result;
}