"use server"


const url = process.env.APP_URL;



interface CatalogType {
    id:number;
    img:string;
}

 const GetBanner = async () :Promise<CatalogType[]> => {
    try {
        const res = await fetch(`${url}/banners`)
        const data = res.json()
        return data
    } catch (error) {
        const err = (error as Error).message
        throw new Error(err)
    }
}

export default GetBanner