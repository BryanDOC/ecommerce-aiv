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
           [];

        
        category:{
            data:{
                slug:string;
                categoryName:string;
            }
    
}
}