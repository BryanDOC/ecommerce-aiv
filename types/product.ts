export type ProductType = {
    id:number;
    
        productName:string;
        slug:string;
        discount:number;
        description:string;
        active:boolean;
        isFeatured:boolean;
        origin: string;
        price: number;
        images:{
            data:{
                id:number;
                attributes:{
                    url:string;
                }
            }[]

        },
        category:{
            data:{
                slug:string;
                categoryName:string;
            }
    
}
}