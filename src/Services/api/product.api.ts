import {gql} from "@apollo/client";

export const CONNECT_PRODUCTS = gql`
    query ($sort: SortFindManyProductInput $limit: Int) {
        viewer {
            productList(sort: $sort limit: $limit) {
                productID
                name
                quantityPerUnit
                unitPrice
                unitsInStock
                discontinued
                supplier {
                    supplierID
                    companyName
                    contactName
                    contactTitle
                    address {
                        street
                        city
                        region
                        postalCode
                        country
                        phone
                    }
                }
                category {
                    categoryID
                    name
                }
            }
        }
    }
`;
