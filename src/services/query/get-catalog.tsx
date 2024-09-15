// "use server"


// const url = process.env.APP_URL;



// interface CatalogType {
//     id:number;
//     img:string;
//     text:string;
//     name:string;
// }

//  const Getdata = async () :Promise<CatalogType[]> => {
//     try {
//         const res = await fetch(`${url}/catalog`)
//         const data = res.json()
//         return data
//     } catch (error) {
//         const err = (error as Error).message
//         throw new Error(err)
//     }
// }

// export default Getdata






"use server"

const url = process.env.APP_URL;

interface CatalogType {
    id: number;
    img: string;
    text: string;
    name: string;
}

const Getdata = async (): Promise<CatalogType[]> => {
    try {
        const res = await fetch(`${url}/catalog`);
        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        const err = (error as Error).message;
        throw new Error(err);
    }
}

export default Getdata;
