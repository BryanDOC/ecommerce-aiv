export type ProductType = {
    id:number;
    
        productName:string;
        slug:string;
        discount:number | null;
        description:string;
        active:boolean;
        isFeatured:boolean;
        origin: string;
        price: number;
        images:
           [
            {
            id:number;
            name:string;
            url:string;
        }
        ];

            category:{
            data:{
                slug:string;
                categoryName:string;
            }
    
}
}