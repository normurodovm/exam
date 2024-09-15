

const url = process.env.APP_URL

export interface Phonetype {
    id:number;
    rame:string;
    color:string;
    title:string;
    price:string;
    img:string;
}


const GetItem = async ():Promise<Phonetype[]> => {
    try {
        const res = await fetch(`${url}/phones`)
        const data = res.json()
        return data
    } catch (error) {
        const err = (error as Error).message
        throw new Error(err)
    }
}


export default GetItem