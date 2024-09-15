// interface CatalogType {
//     id:number;
//     img:string;
//     title:string;
//     rame?:string;
//     color?:string;
//     price?:string;
// }


// const GetItem = async () :Promise<CatalogType[]> => {
//     try {
//         const res = await fetch(`${url}/${params.catalo_id}`)
//         const data = res.json()
//         return data
//     } catch (error) {
//         const err = (error as Error).message
//         throw new Error(err)
//     }
// }


// export default GetItem