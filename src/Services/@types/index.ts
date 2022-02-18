export interface iState {
    productState: {
        products: iProduct[];
    }
    categoryState: {
        categories: iCategory[]
    }
}

export interface iProductState {
    products: iProduct[]
}

export interface iCategoryState {
    categories: iCategory[]
}

export interface setProducts {
    type: "SET_PRODUCTS";
    payload: iProduct[];
}

export interface setCategories {
    type: "SET_CATEGORIES";
    payload: iCategory[];
}

export type appDispatch = setProducts | setCategories;

export interface iProduct {
    productID: number;
    name: string;
    supplierID: number;
    categoryID: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: boolean;
    supplier: iSupplier;
    category: iCategory;
}

export interface iCategory {
    categoryID: number;
    name: string;
    description: string;
    _id: string;
    productList: iProduct[];
}

export interface iSupplier {
    supplierID: number;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: iCustomerAddress;
    _id: string;
}

export interface iCustomerAddress {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string;
}
