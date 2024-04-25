export class Product {
    constructor(
        public id_product: number,
        public name: string,
        public sku: string,
        public description: string,        
        public unit_price: number,         
        public image_url: string,        
        public units_in_stock: number,         
        public date_created: Date,
        public last_updated: Date ){            
        }
}
